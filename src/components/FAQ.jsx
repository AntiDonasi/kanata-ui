import React, { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqData = [
    {
      question: 'Bagaimana cara menggunakan Kachina Bot?',
      answer: 'Simpan nomor bot dan mulai chat di WhatsApp. Ketik .menu untuk melihat fitur seperti AI, downloader (YouTube, TikTok, Spotify), sticker, tools, dan moderasi grup.'
    },
    {
      question: 'Apakah Kachina Bot gratis?',
      answer: 'Ada mode gratis dan premium. Premium memberi limit lebih besar, download tak terbatas, prioritas, serta fitur eksklusif mulai Rp15.000/bulan.'
    },
    {
      question: 'Platform apa saja yang didukung untuk download?',
      answer: 'Kachina mendukung YouTube (audio/video), TikTok (video/audio), Threads, Mediafire, Spotify, dan lainnya.'
    },
    {
      question: 'Bisakah bot digunakan di grup WhatsApp?',
      answer: 'Ya. Kachina memiliki welcome/leave, anti-link, anti-toxic, tagall, promote/demote/kick, info grup, dan pengaturan grup lainnya.'
    },
    {
      question: 'Apakah data saya aman?',
      answer: 'Keamanan data prioritas kami. Kachina tidak menyimpan pesan pribadi dan hanya memproses perintah yang diberikan.'
    },
    {
      question: 'Bagaimana cara upgrade ke premium?',
      answer: 'Gunakan .premium atau cek menu premium di bot untuk pemesanan, status, dan pembayaran.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PERTANYAAN <span className="text-green-500">UMUM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan seputar Kachina Bot
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {faqData.slice(0, 3).map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 border-green-500"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg 
                      className={`w-5 h-5 text-green-500 transform transition-transform duration-200 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            {faqData.slice(3, 6).map((item, index) => {
              const actualIndex = index + 3
              return (
                <div 
                  key={actualIndex} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 border-green-500"
                >
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg 
                        className={`w-5 h-5 text-green-500 transform transition-transform duration-200 ${
                          activeIndex === actualIndex ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === actualIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Masih ada pertanyaan?</h3>
            <p className="text-green-600 mb-4">Jangan ragu untuk menghubungi tim support kami</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <i className="fab fa-whatsapp mr-2"></i>
              Hubungi Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
