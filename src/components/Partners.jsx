import React from 'react'

const Partners = () => {
  const platforms = [
    { name: 'YouTube', logo: 'https://placehold.co/150x60/ff0000/ffffff?text=YouTube', color: 'hover:text-red-500' },
    { name: 'TikTok', logo: 'https://placehold.co/150x60/000000/ffffff?text=TikTok', color: 'hover:text-black' },
    { name: 'Instagram', logo: 'https://placehold.co/150x60/e4405f/ffffff?text=Instagram', color: 'hover:text-pink-500' },
    { name: 'Twitter', logo: 'https://placehold.co/150x60/1da1f2/ffffff?text=Twitter', color: 'hover:text-blue-500' },
    { name: 'Facebook', logo: 'https://placehold.co/150x60/1877f2/ffffff?text=Facebook', color: 'hover:text-blue-600' },
    { name: 'Spotify', logo: 'https://placehold.co/150x60/1db954/ffffff?text=Spotify', color: 'hover:text-green-500' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            PLATFORM YANG DIDUKUNG
          </h2>
          <p className="text-lg text-gray-600">
            Download konten dari berbagai platform populer
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-105"
            >
              <img 
                src={platform.logo} 
                alt={platform.name}
                className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <i className="fas fa-check-circle mr-2"></i>
            <span className="font-medium">Dan masih banyak platform lainnya!</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners