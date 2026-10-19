import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({setCelsius, setMph, setInches, setImperial, imperial, celsius, inches, mph}) => {

 
  const [open, setOpen] = useState(false);
  const [stayOpen, setStayOpen] = useState(false);
  let menuRef = useRef(null);

    const [unit, setUnit] = useState("Imperial")

  const handleImperial = () => {
    if (imperial){
    setCelsius(false);
    setInches(true);
    setMph(true);
    setUnit("Metric")
  }
  
  else{
    setCelsius(true);
    setInches(false);
    setMph(false);
    setUnit("Imperial")
    }
  }
  
  useEffect(() => { 
    const outsideClickHandler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setStayOpen(false);
      }
    }

    document.addEventListener("mousedown", outsideClickHandler);

    return (
      () => document.removeEventListener("mousedown", outsideClickHandler)
      );
  }, [])

  return (
    <div className='flex justify-between item-center px-3 py-1 my-2 h-10 font-[DMSans]'>
      <img src="./src/assets/images/logo.svg" alt="logo" className='object-cover'/>
      <div tabIndex={1} ref={menuRef} onClick={() => setStayOpen(true)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => stayOpen? setOpen(true): setOpen(false)} className='relative text-white cursor-pointer group'>
        <div tabIndex={0} className='flex relative justify-around items-center p-1 w-20 h-full bg-neutral-600/40
        hover:bg-neutral-600/70
        active:border 
        focus:border
        rounded-md inset-shadow-neutral-800 border-white'>
          <img src="./src/assets/images/icon-units.svg" alt="" className="object-cover h-3.5" />
          <p className='text-white text-sm font-[DMSans]'>Units</p>
          <img src="./src/assets/images/icon-dropdown.svg" alt="" className={`object-cover h-1.5 ${open && "rotate-180"} transition-all duration-400`}/>
          
        </div>

        <div className={`flex flex-col items-center justify-center gap-1 
        absolute top-9 right-0 bg-primary-800 border border-white/10
        rounded-md w-35 p-1 font-[DMSans] cursor-default opacity-0 invisible 
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transform 
        ${open? "translate-y-0 visible opacity-100" : "translate-y-5"} transition-all duration-500 ease-in-out`}>
          <button onClick={() => {
            setImperial((prev) => (!prev));
            handleImperial()}} className='hover:bg-primary-600 focus:border text-left border-white/30 text-[12px] h-7 pl-2 w-full rounded-sm cursor-pointer'>
            {`Switch to ${unit}`}
          </button>
          <p className='text-[10px] text-left w-full pl-2 text-white/70 cursor-default'>Temperature</p>
          <button onClick={() => setCelsius(true)} className={`hover:bg-primary-600 ${celsius && "bg-primary-600"} text-left cursor-pointer text-[12px] h-7 pl-2 w-full rounded-sm`}>
            Celsius (&deg;C)
          </button>
          <button onClick={() => setCelsius(false)} className={`hover:bg-primary-600 ${ !celsius && "bg-primary-600"} text-left text-[12px] h-7 pl-2 w-full rounded-sm cursor-pointer`}>
            Fahrenheit (&deg;F)
          </button>
          <div className='cursor-default h-px bg-gray-400/50 w-full mx-2'></div>          
          <p className='cursor-default text-[10px] text-left w-full pl-2 text-white/70'>Wind Speed</p>
          <button onClick={() => setMph(false)} className={`cursor-pointer hover:bg-primary-600 ${ !mph && "bg-primary-600"} text-left text-[12px] h-7 pl-2 w-full rounded-sm`}>
            km/h
          </button>
          <button onClick={() => setMph(true)} className={`hover:bg-primary-600 cursor-pointer ${mph && "bg-primary-600"} text-left text-[12px] h-7 pl-2 w-full rounded-sm`}>
            mph
          </button>
          <div className='h-px bg-gray-400/50 w-full mx-2 cursor-default'></div>          
          <p className='text-[10px] text-left w-full pl-2 text-white/70 cursor-default'>Precipitation</p>
          <button onClick={() => setInches(false)} className={`hover:bg-primary-600 cursor-pointer ${ !inches && "bg-primary-600"} text-left text-[12px] h-7 pl-2 w-full rounded-sm`}>
            Millimeters (mm)
          </button>
          <button onClick={() => setInches(true)} className={`hover:bg-primary-600 cursor-pointer ${inches && "bg-primary-600"} text-left text-[12px] h-7 pl-2 w-full rounded-sm`}>
            Inches (in)
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar

