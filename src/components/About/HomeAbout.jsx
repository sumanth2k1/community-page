import React from 'react'
import { Parallax } from 'react-parallax';
import bglogo from '../../assets/ayyappaSwamyLogo.png'
import carel5 from '../../assets/gal14.jpg'
import carel4 from '../../assets/gal3.jpg'

export default function () {
  return (
    <section className="relative bg-cover bg-center py-20">
      <Parallax blur={0} bgImage={bglogo} bgImageStyle={{height:'100%',width:'auto',opacity:'0.3'}} bgImageAlt="bg-parallax" strength={500}>
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <img src={bglogo} className="h-full object-cover opacity-20" alt="Background" />
      </div> */}
        <h1 className="text-3xl md:text-5xl w-full text-red-800 p-2 underline inline-block"
        style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}>
          About Us
        </h1>
      <div className="relative z-10 w-full text-white max-w-5xl mx-auto text-center">
        <div className="md:flex items-center gap-12 justify-center mt-10 space-y-6 md:space-y-0 md:space-x-6 p-5">
          <div className="md:w-2/5 flex-shrink-0">
            <img src={carel5} className="w-full rounded-lg mb-5" alt="Image 1" />
            <img src={carel4} className="w-full rounded-lg mt-5" alt="Image 2" />
          </div>
          <div className=" text-sm text-red-800 md:text-2xl max-w-md md:max-w-2xl text-center md:text-left">
            <p className="mb-4  text-center">
            Our Shree Shaneshwara Chamundeshwari Ayyappa Bhakta Vrinda public trust was founded in 2002 at the Shree Muthu Mariamma Temple in Mothilal Nehru Nagar, Sion Koliwada, Antophill, Mumbai.
            </p>
            <p className="mb-4  text-center">
            The Shree Shaneshwara Chamundeshwari Ayyappa Bhakta Vrinda public trust hosts the Ayyappa Swamy Pooja and it is annually performend at the Shree Muthu Mariamma Temple, Antop Hill Church.
            </p>
            <p className="mb-4  text-center">
            This tradition was started 21 years ago and is still running with an ever increasing pomp and devotion
            </p>
            <p className="mb-4  text-center">
            Apart from the Maha pooja, Shree Shaneshwara Chamundeshwari Ayyappa Bhakta Vrinda public trust also performs the Mala dharan and Anna dana annualy.

            </p>
          </div>
        </div>
      </div>
      </Parallax>
    </section>
  )
}
