'use client'
import { Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ImageComponent = () => {
    const imageUrls = [
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/01/29/21/50/ai-generated-8540840_1280.jpg",
        "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeState, setFadeState] = useState("fade-in");

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeState("fade-out");
            setTimeout(() => {

                setCurrentImageIndex((prevIndex) =>
                    prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
                );
                setFadeState("fade-in");
            }, 500);
        }, 3500);
        return () => clearInterval(interval);
    }, [imageUrls.length]);
    return (
        <>
            <div className="absolute inset-0 bg-[#ff0]/10 rounded-2xl" />
            <img
                src={imageUrls[currentImageIndex]}
                alt="Delicious food plate"
                className={`rounded-2xl shadow-2xl w-full object-cover relative z-10 opacity-90 ${fadeState}`}
                style={{ height: "500px" }}
            />
            <div className="absolute -bottom-6 -left-6 bg-zinc-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#ff0]/20 z-20">
                <div className="flex items-center gap-2 text-[#ff0] font-semibold">
                    <Sparkles /> AI-Powered Recipe Generation
                </div>
            </div>
            {/* Fade Transition CSS */}
            <style>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        .fade-out {
          animation: fadeOut 0.5s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
        </>
    )
}

export default ImageComponent
