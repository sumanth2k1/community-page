import React from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import bglogo from '../../assets/navlogo.png'
// import Callendar from './Callendar'


const localizer = dayjsLocalizer(dayjs)



export default function LatestUpdates(props) {
  const events = [
    {
      title: 'Padi Pooje',
      start: new Date(2023, 10, 25),
      end: new Date(2023, 10, 25),
    },
    {
      title: 'Padi Pooje',
      start: new Date(2023, 11, 2),
      end: new Date(2023, 11, 2),
    },
    {
      title: 'Padi Pooje',
      start: new Date(2023, 11, 9),
      end: new Date(2023, 11, 9),
    },
    {
      title: 'Maha Pooje',
      start: new Date(2023, 11, 25),
      end: new Date(2023, 11, 25),
    },
    {
      title: 'Padi Pooje',
      start: new Date(2023, 11, 16),
      end: new Date(2023, 11, 16),
    },
    {
      title: 'Padi Pooje',
      start: new Date(2023, 11, 23),
      end: new Date(2023, 11, 23),
    },
    {
      title: 'Padi Pooje',
      start: new Date(2023, 11, 30),
      end: new Date(2023, 11, 30),
    },
    {
      title: 'Padi Pooje',
      start: new Date(2024, 0, 6),
      end: new Date(2024, 0, 6),
    },
  ];

  return (
    <div className="relative h-full bg-transparent">
      <div className='h-full w-full flex absolute z-0 items-center justify-center'>
          <img src={bglogo}  className=" opacity-20" />
        </div>
      <div className="flex z-10 ">
        <h1
          style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}
          className="text-3xl md:text-5xl mt-20 w-full p-2 text-red-800 underline">
          Events and Updates
        </h1>
      </div>
      <div className='lg:flex flex-row z-50'>
        <div className="rounded-15xl m-5 p-3 md:m-10 md:p-10 lg:m-10 lg:p-10" style={{ boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',borderRadius: 15, backgroundImage: "linear-gradient(292deg, rgba(255, 210, 184, 0.70) 13.74%, rgba(255, 239, 229, 0.70) 92.18%)" }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
        </div>
        <div
          className="m-5 p-5 md:m-10 md:p-10 lg:m-10 lg:p-10 rounded-lg bg-gray-0 z-50 h-auto"
          style={{
            backdropFilter: 'blur(10px)',
            boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
          {/* <Callendar/> */}
        </div>
      </div>
    </div>
  )
}
