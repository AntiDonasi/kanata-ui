import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kachina Bot Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <i className="fab fa-whatsapp text-xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Kachina Bot</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Bot WhatsApp terdepan dengan teknologi Baileys. Solusi lengkap untuk automasi, hiburan, dan produktivitas grup WhatsApp Anda.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Telegram"
                >
                  <i className="fab fa-telegram text-lg"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                  aria-label="Discord"
                >
                  <i className="fab fa-discord text-lg"></i>
                </a>
              </div>
            </div>
            
            {/* Fitur Utama */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Fitur Utama
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-green-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    AI Assistant
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Media Downloader
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Group Moderation
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Sticker Maker
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Tools & Utilities */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Tools & Utilities
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Text to Speech
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    QR Code Generator
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    URL Shortener
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Weather Info
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Support & Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Support & Contact
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-purple-500 rounded-full"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-whatsapp text-sm"></i>
                  </div>
                  <span className="text-sm">+62 815-7695-152</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-user-tie text-sm"></i>
                  </div>
                  <span className="text-sm">Owner: +62 895-3955-90009</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-envelope text-sm"></i>
                  </div>
                  <span className="text-sm">support@antidonasi.web.id</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-globe text-sm"></i>
                  </div>
                  <span className="text-sm">antidonasi.web.id</span>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://wa.me/628157695152" 
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Mulai Chat Bot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Kachina Bot. Powered by Baileys WhatsApp API. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Dokumentasi
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Tutorial
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Status Bot
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
