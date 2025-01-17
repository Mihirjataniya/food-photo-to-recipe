import React from 'react';
import { Camera, ChefHat, Sparkles, Utensils } from 'lucide-react';
import ImageComponent from './components/ImageComponent';
import { FaGoogle } from "react-icons/fa"; // FontAwesome icons
import { SiGooglecloud, SiGooglegemini, SiNextdotjs, SiVercel } from "react-icons/si"
import Link from 'next/link';
function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-[#ff0]/20 hover:border-[#ff0]/40">
      <div className="w-12 h-12 bg-[#ff0]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ff0]/20 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-zinc-300">{description}</p>
    </div>
  );
}

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black ">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-20 py-10">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-[#ff0]" />
            <span className="text-xl font-bold text-white">RecipeAI</span>
          </div>
          <Link href={'/signin'} className="bg-[#ff0] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#cc0] transition-colors w-36 text-center">
            Sign In
          </Link>
        </nav>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Turn Food Photos into
              <span className="text-[#ff0]"> Detailed Recipes</span>
            </h1>
            <div className='flex flex-col gap-5'>
              <p className="text-xl text-zinc-300">
                Simply upload a photo of any dish, and our AI will instantly generate a detailed recipe with ingredients and instructions.
              </p>
              <Link href={'/upload'} className="bg-[#ff0] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#cc0] transition-colors w-36 text-center">
                Get Started
              </Link>
            </div>

          </div>
          <div className="flex-1 relative">
            <ImageComponent />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="bg-zinc-900 py-20">
        <div className="container mx-auto px-6
         md:px-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="w-12 h-12 text-blue-400" />}
              title="Photo Recognition"
              description="Google Vision identifies labels realted to dishes from your photos."
            />
            <FeatureCard
              icon={<Sparkles className="w-12 h-12 text-yellow-400" />}
              title="Instant Recipes"
              description="Get detailed recipes with ingredients and instructions in seconds through LLM."
            />
            <FeatureCard
              icon={<Utensils className="w-12 h-12 text-green-400" />}
              title="Customization"
              description="Adjust recipes based on dietary preferences and available ingredients."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-black font-bold">1</div>
              <h3 className="font-semibold mb-2 text-blue-300">Upload Photo</h3>
              <p className="text-blue-200">Take a photo or upload an existing one of any dish.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-black font-bold">2</div>
              <h3 className="font-semibold mb-2 text-yellow-300">AI Analysis</h3>
              <p className="text-yellow-200">AI identifies the dish.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-black font-bold">3</div>
              <h3 className="font-semibold mb-2 text-green-300">Get Recipe</h3>
              <p className="text-green-200">Receive a detailed recipe with instructions.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-zinc-900 py-6 border-t border-zinc-800 text-zinc-300 px-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Built With Section */}
          <div className="flex items-center space-x-4 text-sm">
            <span>Built with:</span>
            <div className="flex items-center space-x-6">
              <SiGooglecloud className="w-5 h-5 text-[#4285F4]" title="Cloud" />
              <SiGooglegemini className="w-5 h-5 text-[#4285F4]" title="Google Vision" />
              <SiNextdotjs className="w-5 h-5 text-white" title="Next.js" />
              <SiVercel className="w-5 h-5 text-white" title="Vercel" />
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-sm text-zinc-400 mt-4 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} <a className='text-purple-500' target='_blank' href="https://www.linkedin.com/in/mihir-jataniya/">Mihir Jataniya.</a> All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
