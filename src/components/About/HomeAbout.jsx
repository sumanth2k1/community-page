import React from 'react'
import bglogo from '../../assets/navlogo.png'

export default function () {
  return (
    <section className="">
      <div className="relative" >

        <div className='h-full w-full flex absolute z-0 items-center justify-center'>
          <img src={bglogo}  className=" opacity-20" />
        </div>
        <div className="flex z-10">
            <h1
              style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}
              className="text-3xl md:text-5xl mt-20 w-full p-2 text-red-800 underline">
              About Us
            </h1>
        </div>
        <div className='md:flex p-6 md:p-20'>
          <div className='-my-0 h-0 w-0 md:h-full md:w-full md:m-10 lg:h-96 lg:w-96'>
            <img src={bglogo} className=''/>
            <img src={bglogo} className=''/>
          </div>
          <div className=" text-center ">
            <p className="text-xl md:text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nihil recusandae molestias corrupti tempora. Fuga, cum earum quis, esse, nobis laborum magni maxime dicta non odio perspiciatis saepe et iste?</p><br />
            <p className="text-xl md:text-3xl">Lorem ipsum dolor si\ur adipisicing elit. Natus possimus repellat dolor, magni obcaecati illo cupiditate numquam alias, exercitationem assumenda fugiat nam sapiente animi quae quasi! Facilis minus molestiae expedita!</p><br/>
            <p className="text-xl md:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus repellat dolor, magni obcaecati illo cupiditate numquam alias, exercitationem assumenda fugiat nam sapiente animi quae quasi! Facilis minus molestiae expedita!</p>
          </div>
        </div>
        </div>
    </section>
  )
}
