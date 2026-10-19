import React from 'react'

const PKICard = ({vector, value}) => {
  return (
    <div className='h-25 bg-neutral-600/40 rounded-lg p-3.5 pl-5'>
              <p>{vector}</p>
              <p className='text-2xl lg:text-3xl mt-3'>{value}</p>
    </div>
  )
}

export default PKICard
