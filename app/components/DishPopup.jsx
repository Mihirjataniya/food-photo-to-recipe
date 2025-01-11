import { X } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
const DishPopup = ({data,closePopUP}) => {
  const buttonColors = [
    { border: '#0ff', text: '#0ff' },      
    { border: '#f0f', text: '#f0f' },         
    { border: '#0f0', text: '#0f0' },       
    { border: '#ff0', text: '#ff0' },        
    { border: '#f70', text: '#f70' },        
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/90" />
      <div className="relative w-[600px] rounded-xl bg-black p-8 shadow-2xl animate-in fade-in-0 zoom-in-95">
        <div className="absolute inset-0 rounded-xl opacity-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
        
        <button 
          className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
          onClick={() => closePopUP()}
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="space-y-6 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2 text-shadow-neon">Choose Your Dish</h2>
            <p className="text-white/70 text-sm">Select your favorite variety</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {data.map((item, index) => (
              <Link
                key={item}
                href={`/recipe/${item.replace(/ /g, "_")}`}
                className="group relative py-4 px-6 rounded-lg border-2 bg-black transition-all duration-300 hover:scale-[1.05] overflow-hidden"
                style={{
                  borderColor: buttonColors[index].border,
                  boxShadow: `0 0 10px ${buttonColors[index].border}, inset 0 0 10px ${buttonColors[index].border}`,
                }}
                onClick={() => console.log(item)}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: buttonColors[index].border }}
                />  
                <span 
                  className="relative font-medium text-lg"
                  style={{ 
                    color: buttonColors[index].text,
                    textShadow: `0 0 5px ${buttonColors[index].text}`
                  }}
                >
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DishPopup
