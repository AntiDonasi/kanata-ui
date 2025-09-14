import React, { useState, useEffect, useRef } from 'react'

const Statistics = () => {
  const [stats, setStats] = useState({
    users: 0,
    downloads: 0,
    groups: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const finalStats = {
    users: 50000,
    downloads: 1000000,
    groups: 5000
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateStats()
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateStats = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        users: Math.floor(finalStats.users * progress),
        downloads: Math.floor(finalStats.downloads * progress),
        groups: Math.floor(finalStats.groups * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setStats(finalStats)
      }
    }, stepDuration)
  }

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'
    }
    return num.toLocaleString()
  }

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                DIPERCAYA OLEH <span className="text-green-500">RIBUAN</span> PENGGUNA
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Kanata Bot telah membantu ribuan pengguna WhatsApp dengan berbagai fitur canggih dan layanan terpercaya.
              </p>
            </div>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 mb-4 group-hover:from-green-100 group-hover:to-emerald-200 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                    {formatNumber(stats.users)}+
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Active Users
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 mb-4 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {formatNumber(stats.downloads)}+
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Downloads
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6 mb-4 group-hover:from-purple-100 group-hover:to-violet-200 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                    {formatNumber(stats.groups)}+
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Groups Managed
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
                <i className="fas fa-clock mr-2"></i>
                <span className="text-sm font-medium">24/7 Online</span>
              </div>
              <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                <i className="fas fa-shield-check mr-2"></i>
                <span className="text-sm font-medium">Aman & Terpercaya</span>
              </div>
              <div className="flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                <i className="fas fa-rocket mr-2"></i>
                <span className="text-sm font-medium">Update Berkala</span>
              </div>
            </div>
          </div>
          
          {/* WhatsApp Interface Mockup */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Phone Frame */}
                <div className="bg-gray-900 p-4 rounded-t-3xl">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                
                {/* WhatsApp Interface */}
                <div className="bg-green-500 p-4">
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-robot text-green-500"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Kanata Bot</h3>
                      <p className="text-xs opacity-90">online</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat Area */}
                <div className="bg-gray-100 p-4 h-64 overflow-hidden">
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                      <p className="text-sm">🎉 Selamat datang di Kanata Bot!</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                      <p className="text-sm">📊 Statistik hari ini:</p>
                      <p className="text-xs text-gray-600 mt-1">• {formatNumber(stats.users)} pengguna aktif</p>
                      <p className="text-xs text-gray-600">• {formatNumber(stats.downloads)} download berhasil</p>
                    </div>
                    <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs ml-auto shadow-sm">
                      <p className="text-sm">Mantap! 🔥</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-80 animate-pulse flex items-center justify-center">
                <i className="fab fa-whatsapp text-white text-2xl"></i>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full opacity-60 animate-bounce flex items-center justify-center">
                <i className="fas fa-download text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics