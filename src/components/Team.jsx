import React, { useState, useEffect } from 'react'
import { teamAPI } from '../services/api'

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await teamAPI.getAll()
        setTeamMembers(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching team members:', err)
        setError('Failed to load team members. Please try again later.')
        setLoading(false)
      }
    }
    
    fetchTeamMembers()
  }, [])

  return (
    <section className="py-20 bg-gray-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TIM <span className="text-green-500">DEVELOPER</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tim profesional yang berdedikasi mengembangkan bot WhatsApp terbaik untuk Anda
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative p-8 text-center">
                {/* Profile Image */}
                <div className="relative mx-auto mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {member.position}
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.social.whatsapp && (
                    <a 
                      href={member.social.whatsapp}
                      className="w-10 h-10 bg-gray-100 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 group/social"
                    >
                      <i className="fab fa-whatsapp text-gray-600 group-hover/social:text-white transition-colors duration-300"></i>
                    </a>
                  )}
                  {member.social.telegram && (
                    <a 
                      href={member.social.telegram}
                      className="w-10 h-10 bg-gray-100 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group/social"
                    >
                      <i className="fab fa-telegram text-gray-600 group-hover/social:text-white transition-colors duration-300"></i>
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 group/social"
                    >
                      <i className="fab fa-github text-gray-600 group-hover/social:text-white transition-colors duration-300"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <i className="fas fa-heart mr-2 text-red-500"></i>
            <span className="font-medium">Dibuat dengan ❤️ untuk komunitas WhatsApp Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team