import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, CheckCircle, Download, RotateCw, RotateCcw, Trash2, Plus, Repeat } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import html2canvas from 'html2canvas';

// Types
interface FishOption {
  id: string;
  img: string;
  name: string;
}

interface PlacedItem {
  id: number;
  fishId: string;
  x: number;
  y: number;
  rotation: number;
  side: 'front' | 'back';
}

interface DragState {
  isDragging: boolean;
  itemId: number | null;
  startX: number;
  startY: number;
  initialX: number;
  initialY: number;
}

const FISH_OPTIONS: FishOption[] = [
  { id: 'kab', img: 'https://picsum.photos/seed/fish1/200/200', name: 'Pla Kab' },
  { id: 'kador', img: 'https://picsum.photos/seed/longfish/200/400', name: 'Pla Kador' },
  { id: 'mor', img: 'https://picsum.photos/seed/scales/200/200', name: 'Pla Mor' },
];

const SHIRT_SIZES = ['S', 'M', 'L', 'XL'];
const MAX_ITEMS = 5;

export const CustomOrder: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].custom;
  
  // State
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [viewSide, setViewSide] = useState<'front' | 'back'>('front');
  const [size, setSize] = useState('M');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Drag State
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    itemId: null,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0
  });

  const canvasRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);

  // Helper to find selected item
  const selectedItem = items.find(i => i.id === selectedItemId);

  // Global Drag Handlers
  useEffect(() => {
    const handleGlobalMove = (e: PointerEvent) => {
      if (!dragState.isDragging || dragState.itemId === null || !canvasRef.current) return;
      
      e.preventDefault();
      
      const rect = canvasRef.current.getBoundingClientRect();
      const deltaXPixels = e.clientX - dragState.startX;
      const deltaYPixels = e.clientY - dragState.startY;
      
      // Convert pixels to percentage
      const deltaXPercent = (deltaXPixels / rect.width) * 100;
      const deltaYPercent = (deltaYPixels / rect.height) * 100;
      
      const newX = Math.max(0, Math.min(100, dragState.initialX + deltaXPercent));
      const newY = Math.max(0, Math.min(100, dragState.initialY + deltaYPercent));

      setItems(prev => prev.map(item => 
        item.id === dragState.itemId ? { ...item, x: newX, y: newY } : item
      ));
    };

    const handleGlobalUp = () => {
      if (dragState.isDragging) {
        setDragState(prev => ({ ...prev, isDragging: false, itemId: null }));
      }
    };

    if (dragState.isDragging) {
      window.addEventListener('pointermove', handleGlobalMove);
      window.addEventListener('pointerup', handleGlobalUp);
    }

    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [dragState]);


  // Handlers
  const handleAddFish = (fish: FishOption) => {
    if (items.length >= MAX_ITEMS) {
      alert(t.limit_reached);
      return;
    }
    const newItem: PlacedItem = {
      id: Date.now(),
      fishId: fish.id,
      x: 50, // Center
      y: 40, // Center-ish
      rotation: fish.id === 'kador' ? 90 : 0, // Default rotation for long fish
      side: viewSide
    };
    setItems([...items, newItem]);
    setSelectedItemId(newItem.id);
  };

  const handleUpdateItem = (updates: Partial<PlacedItem>) => {
    if (selectedItemId === null) return;
    setItems(items.map(item => 
      item.id === selectedItemId ? { ...item, ...updates } : item
    ));
  };

  const handleMove = (dx: number, dy: number) => {
    if (!selectedItem) return;
    handleUpdateItem({
      x: Math.max(10, Math.min(90, selectedItem.x + dx)),
      y: Math.max(10, Math.min(90, selectedItem.y + dy))
    });
  };

  const handleRotate = (deg: number) => {
    if (!selectedItem) return;
    handleUpdateItem({ rotation: selectedItem.rotation + deg });
  };

  const handleDelete = () => {
    if (selectedItemId === null) return;
    setItems(items.filter(i => i.id !== selectedItemId));
    setSelectedItemId(null);
  };

  const setPreset = (preset: 'center' | 'pocket' | 'hem') => {
    if (!selectedItem) return;
    let newPos = { x: 50, y: 40 };
    if (preset === 'pocket') newPos = { x: 65, y: 30 };
    if (preset === 'hem') newPos = { x: 70, y: 75 };
    handleUpdateItem(newPos);
  };

  const handlePointerDown = (e: React.PointerEvent, item: PlacedItem) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent text selection
    setSelectedItemId(item.id);
    
    setDragState({
      isDragging: true,
      itemId: item.id,
      startX: e.clientX,
      startY: e.clientY,
      initialX: item.x,
      initialY: item.y
    });
  };

  const handleSaveImage = async () => {
    if (!exportRef.current) return;
    setIsProcessing(true);
    
    // Allow React to render any pending updates
    setTimeout(async () => {
        try {
            const canvas = await html2canvas(exportRef.current!, {
                backgroundColor: '#ffffff',
                scale: 2, // Higher quality
                useCORS: true,
                logging: false,
                width: 1200, // Explicit width of the export container
                height: 800
            });
            
            const image = canvas.toDataURL("image/png");
            
            // Create download link
            const link = document.createElement('a');
            link.href = image;
            link.download = `tam-rudu-custom-${Date.now()}.png`;
            link.click();
            
            alert(t.success_msg);
        } catch (error) {
            console.error("Save failed:", error);
            alert("Could not save image.");
        } finally {
            setIsProcessing(false);
        }
    }, 100);
  };

  // Helper to render the shirt canvas content (reused for export)
  const renderShirtCanvas = (side: 'front' | 'back', isStaticExport = false) => {
    const sideItems = items.filter(i => i.side === side);
    
    return (
      <div className="relative w-full h-full">
         {/* Shirt Background */}
         <div className={`relative w-full h-full ${side === 'back' ? 'transform scale-x-[-1]' : ''}`}>
             <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" 
                alt="T-Shirt" 
                className="w-full h-full object-contain mix-blend-multiply opacity-90"
                crossOrigin="anonymous" 
            />
         </div>

         {/* Items Layer */}
         <div className="absolute inset-0 top-0 left-0 w-full h-full">
            {sideItems.map((item) => {
                 const fishData = FISH_OPTIONS.find(f => f.id === item.fishId);
                 const isSelected = !isStaticExport && selectedItemId === item.id;
                 
                 return (
                    <div 
                        key={item.id}
                        onPointerDown={!isStaticExport ? (e) => handlePointerDown(e, item) : undefined}
                        className={`absolute w-[24%] md:w-[24%] transition-transform duration-75 ease-out ${!isStaticExport ? 'cursor-move touch-none' : ''}`}
                        style={{ 
                            left: `${item.x}%`, 
                            top: `${item.y}%`, 
                            transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
                            zIndex: isSelected ? 50 : 10
                        }}
                    >
                        <div className={`relative ${isSelected ? 'p-2' : ''}`}>
                            <img 
                                src={fishData?.img} 
                                alt="Fish" 
                                className="w-full h-auto drop-shadow-sm filter mix-blend-multiply select-none pointer-events-none"
                            />
                            {isSelected && (
                                <div className="absolute inset-0 border-2 border-dashed border-indigo-deep/50 rounded-lg animate-pulse pointer-events-none">
                                    <div className="absolute -top-3 -right-3 bg-indigo-deep text-white rounded-full p-1 shadow-sm">
                                        <CheckCircle size={12} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                 );
            })}
         </div>

         {/* Label for export */}
         {isStaticExport && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 font-serif text-gray-400 uppercase tracking-widest text-sm">
                {side === 'front' ? 'FRONT' : 'BACK'}
            </div>
         )}
         
         {/* Empty State Hint (Interactive only) */}
         {!isStaticExport && sideItems.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-gray-300 font-hand text-xl rotate-[-5deg] opacity-60">
                    {side === 'front' ? 'Place Front Design' : 'Place Back Design'}
                </p>
            </div>
         )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-thai text-4xl text-indigo-deep font-bold mb-2">{t.title}</h1>
          <p className="font-serif italic text-gray-500">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Controls (Fish Selection & Add) */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-deep/10">
                <h3 className="font-thai text-lg font-bold text-indigo-deep mb-4 flex items-center gap-2">
                    <span className="bg-indigo-deep text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                    {t.step_1}
                </h3>
                
                <div className="space-y-4">
                    {FISH_OPTIONS.map((fish) => (
                    <button
                        key={fish.id}
                        onClick={() => handleAddFish(fish)}
                        disabled={items.length >= MAX_ITEMS}
                        className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-deep hover:bg-indigo-50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="w-12 h-12 bg-white rounded-lg p-1 border border-gray-100">
                            <img src={fish.img} alt={fish.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="text-left flex-1">
                            <span className="block font-serif font-bold text-gray-700 group-hover:text-indigo-deep">{fish.name}</span>
                            <span className="text-xs text-gray-400 font-thai">{t.add_fish_btn}</span>
                        </div>
                        <Plus size={16} className="text-indigo-deep opacity-0 group-hover:opacity-100" />
                    </button>
                    ))}
                    <p className="text-xs text-center text-gray-400 mt-2">{items.length}/{MAX_ITEMS} {t.limit_reached.replace('5', MAX_ITEMS.toString())}</p>
                </div>
             </div>
          </div>

          {/* CENTER: Interactive Canvas */}
          <div className="lg:col-span-6 order-1 lg:order-2">
             <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 relative overflow-hidden border border-gray-100">
                
                {/* View Toggles */}
                <div className="flex justify-center gap-4 mb-6">
                    <button 
                        onClick={() => setViewSide('front')}
                        className={`px-6 py-2 rounded-full font-thai text-sm transition-all ${viewSide === 'front' ? 'bg-indigo-deep text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                        {t.front}
                    </button>
                    <button 
                        onClick={() => setViewSide('back')}
                        className={`px-6 py-2 rounded-full font-thai text-sm transition-all ${viewSide === 'back' ? 'bg-indigo-deep text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                        {t.back}
                    </button>
                </div>

                {/* The Visible Capture Area */}
                <div 
                    ref={canvasRef}
                    className="relative w-full aspect-[3/4] max-w-[500px] mx-auto flex items-center justify-center bg-white touch-none"
                >
                    {renderShirtCanvas(viewSide)}
                </div>
             </div>
             
             {/* Mobile Hint */}
             <p className="text-center text-gray-400 text-sm mt-4 lg:hidden animate-pulse font-thai">{t.select_hint}</p>
          </div>

          {/* RIGHT: Manipulators */}
          <div className="lg:col-span-3 space-y-6 order-3">
            
            {/* Step 2: Controls */}
            <div className={`bg-white p-6 rounded-2xl shadow-sm border border-indigo-deep/10 transition-opacity duration-300 ${!selectedItem ? 'opacity-50 pointer-events-none grayscale' : 'opacity-100'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-thai text-lg font-bold text-indigo-deep flex items-center gap-2">
                        <span className="bg-indigo-deep text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                        {t.step_2}
                    </h3>
                    <button 
                        onClick={handleDelete}
                        className="text-red-400 hover:text-red-600 p-1 hover:bg-red-50 rounded"
                        title={t.delete}
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                {/* Presets */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <button onClick={() => setPreset('center')} className="py-2 text-xs bg-gray-50 hover:bg-indigo-50 text-indigo-deep rounded border border-gray-200 font-thai">{t.btn_center}</button>
                    <button onClick={() => setPreset('pocket')} className="py-2 text-xs bg-gray-50 hover:bg-indigo-50 text-indigo-deep rounded border border-gray-200 font-thai">{t.btn_pocket}</button>
                    <button onClick={() => setPreset('hem')} className="py-2 text-xs bg-gray-50 hover:bg-indigo-50 text-indigo-deep rounded border border-gray-200 font-thai">{t.btn_hem}</button>
                </div>

                {/* Arrows */}
                <div className="bg-paper rounded-xl p-3 mb-4">
                    <div className="grid grid-cols-3 gap-1 max-w-[140px] mx-auto">
                        <div></div>
                        <button onClick={() => handleMove(0, -5)} className="p-2 bg-white shadow-sm border rounded active:bg-gray-100 flex justify-center"><ChevronUp size={20}/></button>
                        <div></div>
                        <button onClick={() => handleMove(-5, 0)} className="p-2 bg-white shadow-sm border rounded active:bg-gray-100 flex justify-center"><ChevronLeft size={20}/></button>
                        <div className="flex items-center justify-center"><Repeat size={14} className="text-gray-300"/></div>
                        <button onClick={() => handleMove(5, 0)} className="p-2 bg-white shadow-sm border rounded active:bg-gray-100 flex justify-center"><ChevronRight size={20}/></button>
                        <div></div>
                        <button onClick={() => handleMove(0, 5)} className="p-2 bg-white shadow-sm border rounded active:bg-gray-100 flex justify-center"><ChevronDown size={20}/></button>
                        <div></div>
                    </div>
                </div>

                {/* Rotation */}
                <div className="flex gap-2">
                    <button onClick={() => handleRotate(-15)} className="flex-1 py-2 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-xs font-thai text-gray-600 hover:bg-gray-50">
                        <RotateCcw size={14} /> {t.rotate_left}
                    </button>
                    <button onClick={() => handleRotate(15)} className="flex-1 py-2 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-xs font-thai text-gray-600 hover:bg-gray-50">
                        <RotateCw size={14} /> {t.rotate_right}
                    </button>
                </div>
            </div>

            {/* Step 3: Size & Action */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-deep/10">
                <h3 className="font-thai text-lg font-bold text-indigo-deep mb-4 flex items-center gap-2">
                    <span className="bg-indigo-deep text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                    {t.step_3}
                </h3>
                
                <div className="flex gap-2 mb-6">
                    {SHIRT_SIZES.map((s) => (
                    <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`flex-1 h-10 rounded-lg font-serif text-sm border flex items-center justify-center transition-all ${
                        size === s 
                        ? 'bg-indigo-deep text-white border-indigo-deep shadow-md' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-deep'
                        }`}
                    >
                        {s}
                    </button>
                    ))}
                </div>

                <button 
                    onClick={handleSaveImage}
                    disabled={isProcessing}
                    className="w-full py-4 bg-gold-soft text-indigo-deep font-thai font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                >
                    {isProcessing ? (
                        <span className="animate-pulse text-sm">{t.downloading}</span>
                    ) : (
                        <>
                        <Download size={20} /> {t.add_to_cart}
                        </>
                    )}
                </button>
            </div>

          </div>

        </div>

        {/* Hidden Export Container (Off-Screen) */}
        {/* We render both front and back side-by-side here for the export */}
        <div 
            style={{ 
                position: 'absolute', 
                left: '-9999px', 
                top: 0 
            }}
        >
            <div 
                ref={exportRef}
                className="bg-white flex flex-row p-8 gap-8 items-center justify-center"
                style={{ width: '1200px', height: '800px' }}
            >
                <div className="w-[500px] h-[666px] relative border border-gray-100 bg-gray-50/30">
                     {renderShirtCanvas('front', true)}
                </div>
                <div className="w-[500px] h-[666px] relative border border-gray-100 bg-gray-50/30">
                     {renderShirtCanvas('back', true)}
                </div>
                
                {/* Footer Info in Image */}
                <div className="absolute bottom-4 left-0 w-full text-center text-gray-400 font-serif text-sm">
                    ORDER TICKET: {new Date().toLocaleDateString()} | SIZE: {size} | TAM RUDU
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};