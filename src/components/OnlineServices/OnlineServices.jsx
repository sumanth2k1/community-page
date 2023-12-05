import React from 'react'
import bglogo from '../../assets/navlogo.png'
import cover from '../../assets/poojaCover.jpg'

export default function OnlineServices() {
    return (
        <div className="relative h-full">
            {/* <div className='h-full w-full flex absolute z-0 items-center justify-center'>
          <img src={bglogo}  className=" opacity-20" />
        </div> */}
            <div className="flex z-10 ">
                <h1
                    style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}
                    className="text-3xl md:text-5xl mt-20 w-full p-2 text-red-800 underline">
                    Online Pooja Booking
                </h1>
            </div>
            <div className='bg-cover w-full absolute flex z-0 items-center justify-center'>
                <img src={cover} className="mt-50 opacity-20" />
            </div>
            <div
                className="md:w-2/3 lg:w-2/4 mx-auto md:m-8 lg:m-20 p-8 bg-gray-50"
                style={{
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
                    gap:10
                }}
            >
                <h1 className='text-2xl md:text-4xl text-red-600'>Pooja Services</h1>
                <p className='text-red-400 m-10 text-1xl'>Pooja booking office timings: Daily between 6am and 9pm at the Pooja Booking Counter outside Gate No. 3
                    Following Pooja’s are performed under the explicit instructions and directions of competent priests only.</p>
                {/* Add your content here */}
                <p style={{borderWidth:1, margin:10}}></p> 
                <div style={{alignItems:'center',gap:10,justifyContent:"center"}}>
                    <div className='flex m-10' style={{justifyContent:'space-around',flexDirection:'row',alignSelf:'center'}}>
                        <p className='underline text-red-500 text-1xl'>Pooja 1</p>
                        <p className='underline text-red-500 text-1xl'>Pooja 2</p>
                    </div>
                    <div className='flex m-10' style={{justifyContent:'space-around',flexDirection:'row'}}>
                        <p className='underline text-red-500 text-1xl'>Pooja 3</p>
                        <p className='underline text-red-500 text-1xl'>Pooja 4</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
