import React from 'react'

export default function LiveDarshan() {
  return (
<div className='p-4 md:p-10 lg:p-16 md:w-2/3 lg:w-2/3 mx-auto'>
  <iframe
    // width="853"
    // height="480"
    className="w-full h-80 md:h-96 lg:h-96"
    src={`https://www.youtube.com/embed/QvXTUlbvx1I`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  />
</div>


  )
}
