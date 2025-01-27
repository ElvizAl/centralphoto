"use client"

import type React from "react"
import { useRef } from "react"
import Testimonial from "./testimonial"

const testimonials = [
  { id: 1, text: "This product changed my life!", author: "John Doe" },
  { id: 2, text: "Absolutely brutal. I love it.", author: "Jane Smith" },
  { id: 3, text: "Tempat cetak foto lengkap dgn hasil yg Bagus, pelayanan ramah, lokasi dan parkir luas.", author: "Danny ram" },
  { id: 4, text: "Hasil fotonya gak ngecawain bagus, jernih dan juga rapih. Ter the best", author: "Nurcahya ningsih" },
  { id: 5, text: "Hasil cetakannya bagus, cepat pelayanan nya dan puas hasilnya..", author: "Ferry anwar" },
  { id: 6, text: "Cetak foto paling bagus menurut aku dan pengerjaanya cepet pelayanan bagus", author: "Dillawaty waty" },
]

const TestimonialSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full p-8">
      {/* Judul Testimonials */}
      <h2 className="text-3xl font-bold text-center mb-6 text-white relative">
        Testimonials
        <span className="block mx-auto mt-2 h-1 w-1/3 bg-gradient-to-r from-purple-500 to-blue-500"></span>
      </h2>
      
      <div className="relative">
        <div ref={sliderRef} className="flex overflow-x-auto scrollbar-hide space-x-4 p-4 justify-center">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider
