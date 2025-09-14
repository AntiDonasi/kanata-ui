import React, { useEffect } from 'react'

const ParallaxBackground = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const shapes = document.querySelectorAll('.parallax-shape')
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5
        const xMove = (x - 0.5) * speed * 50
        const yMove = (y - 0.5) * speed * 50
        
        shape.style.transform = `translate(${xMove}px, ${yMove}px) rotate(${x * 360}deg)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="horizontal-parallax">
      <div className="parallax-shape shape-1"></div>
      <div className="parallax-shape shape-2"></div>
      <div className="parallax-shape shape-3"></div>
    </div>
  )
}

export default ParallaxBackground