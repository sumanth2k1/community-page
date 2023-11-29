import React from 'react'
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal6 from '../../assets/gal6.jpg'
import Gallery from 'react-photo-gallery'

export default function HomeGallery() {
  const gallary = [
    {
      id: 1, 
      galSrc: gal1, 
      width: 4,
      height: 3
    },
    {
      id: 2, 
      src: gal2, 
      width: 4,
      height: 3
    },
    {
      id: 3, 
      src: gal3, 
      width: 4,
      height: 3
    },
    {
      id: 4, 
      src: gal4, 
      width: 4,
      height: 3
    },
    {
      id: 5, 
      src: gal5, 
      width: 4,
      height: 3
    },
    {
      id: 6, 
      src: gal6, 
      width: 4,
      height: 3
    },
  ]
  return (
    <div>
      <div className="flex z-10">
        <h1
          style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}
          className="text-3xl md:text-5xl mt-20 w-full p-2 text-red-800 underline">
          Gallery
        </h1>
      </div>
      <Gallery photos={gallary} />
    </div>
  )
}
