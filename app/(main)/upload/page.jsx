'use client';
import { useEdgeStore } from '@/lib/edgestore';
import axios from 'axios';
import { Camera, Upload } from 'lucide-react';
import React, { useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { edgestore } = useEdgeStore();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const animateLoading = (targetValue) => {
    const increment = targetValue > loading ? 1 : -1; 
    const interval = setInterval(() => {
      setLoading((prev) => {
        if ((increment > 0 && prev >= targetValue) || (increment < 0 && prev <= targetValue)) {
          clearInterval(interval); 
          return targetValue;
        }
        return prev + increment;
      });
    }, 10); 
  };

  const handleFile = async (file) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    animateLoading(25); 

    setFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);

    try {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      animateLoading(50); 
      const response = await axios.post('/api/identify-dish-labels', {
        imageUrl: res.url
      });
      const labels = response.data.labels
      const descriptions = labels.map((label) => label.description);
      console.log(descriptions);
      setLoading(75)
      const response2 = await axios.post('/api/generate-recipe-names',{
        labels : descriptions
      })
      console.log(response2.data.recipeNames)
      setLoading(100)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black min-h-screen h-full flex flex-col items-center justify-center w-full">
      <div
        className={`h-96 w-80 md:w-96 border-2 rounded-2xl flex flex-col gap-3 items-center justify-center border-[#FFD700] bg-gradient-to-br from-[#FFD700]/30 to-[#EAB308]/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all my-8  px-5 relative ${
          isDragging ? 'border-white border-dashed' : ''
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </div>
        ) : (
          <>
            <Camera className="text-[#c0c0c0]" size={120} strokeWidth={1} />
            <p className="text-[#f5e8a3] text-lg my-2">Drag & Drop the image</p>
            <div className="flex justify-center items-center gap-2 w-full">
              <div className="border border-[#f5e8a3] w-12"></div>
              <div className="text-[#FFD700] text-sm font-bold">OR</div>
              <div className="border border-[#f5e8a3] w-12"></div>
            </div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="bg-[#FFD700] w-36 py-2 my-4 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all flex items-center justify-center gap-2">
                <span>
                  <Upload size={18} />
                </span>{' '}
                UPLOAD
              </div>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
          </>
        )}
        {loading > 0 && (
          <div className="absolute bottom-4 w-64 bg-black/20 h-3 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-[#FFD700] to-yellow-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${loading}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        )}
      </div>
      <p className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] text-center my-6 animate-shimmer ">
        Ready to Cook? Upload Your Dish!
      </p>
    </div>
  );
};

export default App;
