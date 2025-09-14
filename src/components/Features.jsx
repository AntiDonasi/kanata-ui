import React, { useState, useEffect } from 'react'
import { featuresAPI } from '../services/api'

const Features = () => {
  const [features, setFeatures] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await featuresAPI.getAll()
        setFeatures(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching features:', err)
        setError('Failed to load features. Please try again later.')
        setLoading(false)
      }
    }
    
    fetchFeatures()
  }, [])

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FITUR <span className="text-green-500">UNGGULAN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berbagai fitur canggih yang memudahkan aktivitas digital Anda di WhatsApp
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center">
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Coba Lagi
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        )}
        
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            <i className="fab fa-whatsapp mr-2"></i>
            Coba Semua Fitur
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features