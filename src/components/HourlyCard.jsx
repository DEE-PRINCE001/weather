import React from 'react'

const HourlyCard = ({image, time, temp}) => {
  return (
    <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
          <div className='flex items-center'>
            <img src={image} alt="" className='h-10 mr-2'/>
            <p>{time}</p>
          </div>
          <p>{temp}</p>
    </div>

  )
}

export default HourlyCard
