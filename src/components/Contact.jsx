import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit form')
      }
      
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('Failed to submit form. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HUBUNGI <span className="text-green-500">KAMI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Butuh bantuan atau ingin berkolaborasi? Tim support Kachina Bot siap membantu Anda 24/7.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="fab fa-whatsapp text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+62 815-7695-152</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-user-tie text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Owner</h4>
                    <p className="text-gray-600">+62 895-3955-90009</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="fab fa-telegram text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Telegram</h4>
                  <p className="text-gray-600">@kachinabot_support</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">support@antidonasi.web.id</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h4>
                <a href="https://wa.me/628157695152" target="_blank" rel="noopener" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Chat Langsung dengan Bot
                </a>
                <a href="https://wa.me/62895395590009" target="_blank" rel="noopener" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <i className="fas fa-user-tie mr-2"></i>
                  Hubungi Owner
                </a>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <i className="fas fa-book mr-2"></i>
                  Lihat Tutorial
                </button>
              </div>
            </div>
            
            {/* Bot Status */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Status Bot</h4>
                  <p className="text-gray-600">Kachina Bot sedang online</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-medium">Online</span>
                </div>
              </div>
              <div className="mt-4 bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Response Time</span>
                  <span className="text-green-600 font-medium"> &lt; 1 detik</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Uptime</span>
                  <span className="text-green-600 font-medium">99.9%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email atau WhatsApp
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email atau nomor WhatsApp"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Ceritakan kebutuhan atau pertanyaan Anda tentang Kachina Bot..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r ${isSubmitting ? 'from-gray-400 to-gray-500 cursor-not-allowed' : 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105'} text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-green-300`}
              >
                <span className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-5 w-5 mr-2 border-t-2 border-b-2 border-white rounded-full"></span>
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </span>
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</span>
                  </div>
                </div>
              )}
              
              {submitError && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200">
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}
            </form>
            
            <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-start space-x-3">
                <i className="fas fa-info-circle text-green-500 mt-0.5"></i>
                <div className="text-sm text-green-700">
                  <p className="font-medium mb-1">Tips:</p>
                  <p>Untuk respon lebih cepat, gunakan WhatsApp atau Telegram. Tim support kami online 24/7!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
