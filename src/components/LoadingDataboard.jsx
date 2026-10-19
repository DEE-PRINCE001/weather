import React from 'react'
import PKICard from './PKICard';

const LoadingDataboard = () => {
  return (
        <div className='flex flex-col gap-3 sm:flex-row sm:space-3 mx-2 my-4 font-[DMSans] text-white'>
      <div className='w-full'>
        <div className='flex flex-col gap-2 items-center justify-center bg-neutral-600/40 w-full h-64 rounded-3xl text-white font-[DMSans] animate-pulse'>
          <img src="./src/assets/images/icon-loading.svg" alt="" className='h-5 animate-spin [animation-duration:2s]'/>
          <p className='text-white text-shadow-md text-center'>Loading...</p> 
        </div>

{/* PKICards */}
        <div className='my-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 text-white font-[DMSans] font-medium'>
            <PKICard vector="Feels Like" value={"_"}/>
            <PKICard vector={"Humidity"} value={ `_`}/>
            <PKICard vector={"Wind"} value={"_"}/>
            <PKICard vector={"Precipitation"} value={"_"}/>
          </div>
        </div>

{/* Daily Forecast */}
        <div>
          <p className='text-white font-[DMSans] mb-2'>Daily forecast</p>
          <div className='grid grid-cols-3 md:grid-cols-7 gap-2 text-white'>
            <div className='flex flex-col h-40 bg-neutral-600/40 rounded-lg items-center justify-between px-2.5 py-3.5 border border-neutral-600/50'>
            </div>
            <div className='flex flex-col h-40 bg-neutral-600/40 rounded-lg items-center justify-between px-2.5 py-3.5 border border-neutral-600/50'>
            </div>
            <div className='flex flex-col h-40 bg-neutral-600/40 rounded-lg items-center justify-between px-2.5 py-3.5 border border-neutral-600/50'>
            </div>
            <div className='flex flex-col h-40 bg-neutral-600/40 rounded-lg items-center justify-between px-2.5 py-3.5 border border-neutral-600/50'>
            </div>
            <div className='flex flex-col h-40 bg-neutral-600/40 rounded-lg items-center justify-between px-2.5 py-3.5 border border-neutral-600/50'>
            </div>
            <div className='flex flex-col h-40 bg-neutral-600/40 rounded-lg items-center justify-between px-2.5 py-3.5 border border-neutral-600/50'>
            </div>
            <div className='flex flex-col h-40 bg-neutral-600/40 rounded-lg items-center justify-between px-2.5 py-3.5 border border-neutral-600/50'>
            </div>
          </div>
        </div>
      </div>

{/* HOURLY FORECAST */}
      <div className='flex flex-col bg-neutral-600/40 rounded-lg p-3 gap-2 sm:w-[35%] justify-between overflow-y-auto'> 
        <div className='flex w-full justify-between items-center cursor-pointer'>
          <p className='text-6'>Hourly forecast</p>
          <div className='flex bg-neutral-600/70 h-8 rounded-md items-center justify-around p-2 w-[38%] border border-neutral-600/50'>
            <p className='text-sm'>Tuesday</p>
            <img src="./src/assets/images/icon-dropdown.svg" alt="" className='object-cover h-1.5'/>
          </div>
        </div>
        
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
        <div className='flex w-full bg-neutral-500/30 border border-white/10 rounded-lg p-3 justify-between h-10 items-center'>
        </div>
      </div>
    </div>
  );
}

export default LoadingDataboard
