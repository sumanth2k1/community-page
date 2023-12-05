import React from 'react'
import bglogo from '../../assets/navlogo.png'
import carel5 from '../../assets/carel5.png'
import carel4 from '../../assets/carel4.png'

export default function () {
  return (
    <section className="relative bg-cover bg-center py-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={bglogo} className="w-full h-full object-cover opacity-20" alt="Background" />
      </div>
        <h1 className="text-3xl md:text-5xl w-full text-red-800 p-2 underline inline-block"
        style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}>
          About Us
        </h1>
      <div className="relative z-10 w-full text-white max-w-5xl mx-auto text-center">
        <div className="md:flex items-center justify-center mt-10 space-y-6 md:space-y-0 md:space-x-6 p-5">
          <div className="md:w-2/5 flex-shrink-0">
            <img src={carel5} className="w-full rounded-md mb-5" alt="Image 1" />
            <img src={carel4} className="w-full rounded-md mt-5" alt="Image 2" />
          </div>
          <div className="text-xl text-red-800 md:text-2xl max-w-md md:max-w-2xl text-center md:text-left">
            <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nihil recusandae molestias corrupti tempora. Fuga, cum earum quis, esse, nobis laborum magni maxime dicta non odio perspiciatis saepe et iste?
            </p>
            <p className="mb-4">
              Lorem ipsum dolor si\ur adipisicing elit. Natus possimus repellat dolor, magni obcaecati illo cupiditate numquam alias, exercitationem assumenda fugiat nam sapiente animi quae quasi! Facilis minus molestiae expedita!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus repellat dolor, magni obcaecati illo cupiditate numquam alias, exercitationem assumenda fugiat nam sapiente animi quae quasi! Facilis minus molestiae expedita!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
