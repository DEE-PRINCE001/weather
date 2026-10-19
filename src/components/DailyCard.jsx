import React from 'react'

const DailyCard = ({day, image, from, to}) => {
  return (
    <div className='flex flex-col h-40 bg-neutral-600/40 rounded-lg items-center justify-between px-2.5 py-3.5 border border-neutral-600/50'>
              <p>{day}</p>
              <img src={image} alt="" className='h-15'/>
              <div className='flex items-center justify-between w-full'>
                <p>{from}</p>
                <p>{to}</p>
              </div>
    </div>

  )
}

export default DailyCard
