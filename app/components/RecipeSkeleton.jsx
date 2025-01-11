import React from 'react'

const RecipeSkeleton = () => {
  return (
    <div className="min-h-screen p-8 bg-black">
    <div className="grid md:grid-cols-4 gap-6">
      {/* Left column with header and grid */}
      <div className="col-span-2 space-y-6">
        {/* Header section */}
        <div className=" animate-pulse space-y-4">
          <div className=" h-44 bg-gray-800 rounded-lg" />
          <div className="space-y-2">
            <div className="h-2 bg-gray-800 rounded" />
            <div className="h-2 bg-gray-800 rounded" />
            <div className="h-2 bg-gray-800 rounded" />
            <div className="h-2 bg-gray-800 rounded w-2/3" />
          </div>
        </div>

        {/* Grid section */}
        <div className=" animate-pulse p-6 bg-gray-800 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-700 rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* Right content sections */}
      <div className="animate-pulse col-span-2 grid md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-6 bg-gray-800 rounded-3xl">
            <div className="space-y-3">
              <div className="h-10 bg-gray-700 rounded w-3/4" />
              <div className="h-5 bg-gray-700 rounded" />
              <div className="h-5 bg-gray-700 rounded" />
              <div className="h-5 bg-gray-700 rounded" />
              <div className="h-5 bg-gray-700 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default RecipeSkeleton
