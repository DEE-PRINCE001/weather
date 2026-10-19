import { useState } from "react"


function Others() {
  const [isDark, setIsDark] = useState(false)
  const [name, setname] = useState("")

  const toggleBackground = () => {
    setIsDark(!isDark)
  } 

  const changeName = (e) => setname(e.target.value)

  const pageStyle = {
    backgroundColor: isDark? "black" : "white",
    height: "150vh"
  }
  const text = isDark? "Change to White" : "Change to black"
  return (<>
  
    <div style = {pageStyle}>
      <button onClick={toggleBackground}>
        {text}
      </button>

      <div style={{display:"block", marginBottom:"5px"}}>
      <input type="text" value={name} onChange={changeName}/>
      <h2>hello {name}</h2>
      </div>
    </div>

    </>
  )
    
}

export default Others

