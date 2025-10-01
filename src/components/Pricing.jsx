import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: 0,
      features: [
        '10 download/hari',
        'AI chat dasar (Gemini)',
        'Sticker maker',
        'Text-to-Speech (limit)'
      ],
      featured: false,
      buttonText: 'Mulai Gratis'
    },
    {
      name: 'Premium',
      price: 15000,
      features: [
        'Unlimited download',
        'AI chat lanjutan (Llama/Qwen)',
        'Group moderation penuh',
        'Akses semua tools',
        'Prioritas support'
      ],
      featured: true,
      buttonText: 'Upgrade Premium'
    },
    {
      name: 'VIP',
      price: 25000,
      features: [
        'Semua fitur Premium',
        'Custom commands',
        'Multi-group support',
        'API access (opsional)',
        '24/7 support'
      ],
      featured: false,
      buttonText: 'Jadi VIP'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-800" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PILIH PAKET ANDA
          </h2>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Nikmati fitur Kachina Bot sesuai kebutuhan Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.featured 
                  ? 'ring-4 ring-yellow-400 lg:scale-110 z-10' 
                  : 'hover:shadow-3xl'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Paling Populer
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-extrabold text-gray-900">
                      {plan.price === 0 ? 'Gratis' : `Rp${plan.price.toLocaleString()}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-xl text-gray-500 ml-2">
                        /bulan
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg focus:ring-green-300'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-gray-300 hover:border-gray-400 focus:ring-gray-300'
                  }`}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-green-200 text-sm">
            💡 Semua paket termasuk update fitur terbaru dan dukungan komunitas
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
