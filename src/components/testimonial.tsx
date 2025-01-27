import type React from "react"

interface TestimonialProps {
  text: string
  author: string
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author }) => {
  return (
    <div className="flex-shrink-0 w-64 bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
      <p className="text-sm font-bold mb-2">{text}</p>
      <p className="text-right font-mono">- {author}</p>
    </div>
  )
}

export default Testimonial

