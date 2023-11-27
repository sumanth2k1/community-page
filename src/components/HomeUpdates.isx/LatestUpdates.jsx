import React from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs)

export default function LatestUpdates(props) {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 11, 17),
      end: new Date(2023, 11, 23),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 11, 25),
      end: new Date(2023, 11, 27),
    },
  ];

  return (
    <div className="relative h-full">
      <div className="flex z-10 ">
        <h1
          style={{ background: 'linear-gradient(180deg, #FFBE99 0%, rgba(255, 190, 153, 0.77) 100%)' }}
          className="text-3xl md:text-5xl mt-20 w-full p-2 text-red-800 underline">
          Events and Updates
        </h1>
      </div>
      <div className='md:flex flex-row '>
        <div className="rounded-15xl m-10 p-10" style={{ borderRadius: 15, backgroundImage: "linear-gradient(292deg, rgba(255, 210, 184, 0.70) 13.74%, rgba(255, 239, 229, 0.70) 92.18%)" }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. Consectetur voluptates quas vitae eius ipsum quidem. Sunt consequuntur assumenda, officia quam quia natus laudantium numquam nihil maiores, dicta dolorem alias odit.</p>
        </div>
        <div className="p-10 rounded-15xl" style={{}}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </div>
    </div>
  )
}
