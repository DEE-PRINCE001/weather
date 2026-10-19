import React, { useState } from 'react'

const SearchBar = ({fetchFunction, loading, weather}) => {

  const [city, setCity] = useState("")
  
  const handleSearch = (e) => {
    e.preventDefault();
    fetchFunction(city);
    setCity("")
  };
  
  return (    
    <form onSubmit={handleSearch} className='flex flex-col items-center justify-center gap-2 mx-2 sm:flex-row sm:mx-20'>
      <div className='relative w-full'>
        <input type="text" placeholder="Search for a place..." value={city} onChange={(e) => setCity(e.target.value)} 
        className='outline-0 bg-neutral-700/40 text-white text-sm rounded-md w-full h-9 pl-10 pb-0.9 focus:border'/>
        <img src="./src/assets/images/icon-search.svg" className='absolute top-3 left-4 object-cover h-3.5'/>
          <div className={`absolute invisible opacity-0 top-10 left-0 flex bg-primary-800 border border-white/10
             text-white text-sm rounded-md w-full h-9 pl-4 pb-0.9 justify-start space-x-2 ${loading && weather && "visible opacity-100"} z-50 pt-1.5`}>
          <img src="./src/assets/images/icon-loading.svg" alt="" className='h-4 animate-spin [animation-duration:2s] mt-0.5'/>
          <div >Search in progress...</div>
          </div>
      </div>
      <button className='bg-blue-700 w-full sm:w-[20%] text-sm text-white font-[DMSans] rounded-md h-9 
      hover:bg-blue-800 active:border transition-all cursor-pointer' type='submit'>Search</button>
      </form>
  )
}

export default SearchBar;