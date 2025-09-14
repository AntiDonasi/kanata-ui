import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 flex items-center relative overflow-hidden" id="home">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              KANATA <span className="text-green-300">BOT</span><br/>
              WHATSAPP<br/>
              <span className="text-green-300">ASSISTANT</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Bot WhatsApp multifungsi dengan AI, downloader, moderasi grup, dan berbagai tools untuk memudahkan aktivitas digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <i className="fab fa-whatsapp mr-2"></i>
                Mulai Chat Bot
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                <i className="fas fa-play mr-2"></i> Lihat Demo
              </button>
            </div>
            
            {/* Feature Highlights */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2">
                  <i className="fas fa-robot text-2xl text-green-300"></i>
                </div>
                <span className="text-sm font-medium">AI Assistant</span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2">
                  <i className="fas fa-download text-2xl text-green-300"></i>
                </div>
                <span className="text-sm font-medium">Downloader</span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2">
                  <i className="fas fa-shield-alt text-2xl text-green-300"></i>
                </div>
                <span className="text-sm font-medium">Moderasi</span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2">
                  <i className="fas fa-tools text-2xl text-green-300"></i>
                </div>
                <span className="text-sm font-medium">Tools</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* WhatsApp Chat Mockup */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
              {/* Chat Header */}
              <div className="flex items-center mb-4 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-robot text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Kanata Bot</h3>
                  <p className="text-sm text-green-500">● Online</p>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-xs">
                  <p className="text-sm text-gray-700">Halo! Saya Kanata Bot 🤖</p>
                  <p className="text-xs text-gray-500 mt-1">10:30</p>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-xs">
                  <p className="text-sm text-gray-700">Ketik .menu untuk melihat semua fitur!</p>
                  <p className="text-xs text-gray-500 mt-1">10:30</p>
                </div>
                <div className="bg-green-500 rounded-2xl rounded-tr-sm p-3 max-w-xs ml-auto">
                  <p className="text-sm text-white">.menu</p>
                  <p className="text-xs text-green-200 mt-1">10:31</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-float">
              <i className="fab fa-whatsapp text-2xl text-green-500 mb-2"></i>
              <span className="block text-sm font-semibold text-gray-700">24/7 Active</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <i className="fas fa-users text-2xl text-blue-600 mb-2"></i>
              <span className="block text-sm font-semibold text-gray-700">Multi Group</span>
            </div>
            <div className="absolute top-1/2 -right-8 bg-white rounded-xl p-3 shadow-lg animate-float" style={{animationDelay: '2s'}}>
              <i className="fas fa-magic text-xl text-purple-600"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero