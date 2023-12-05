import React from 'react'
// import Gallery from 'react-photo-gallery'
import ReactResponsiveGallery from 'react-responsive-gallery'
import gallaryImage from '../../assets/galleryImages'

export default function HomeGallery() {

  return (
    <div>
      <div className="flex z-10">
        <h1
          style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}
          className="text-3xl md:text-5xl mt-20 w-full p-2 text-red-800 underline">
          Gallery
        </h1>
      </div>
      <div className='p-10'>
        {/* <Gallery photos={gallaryImage} /> */}
        <ReactResponsiveGallery useLightBox media={gallaryImage} />
      </div>
    </div>
  )
}
