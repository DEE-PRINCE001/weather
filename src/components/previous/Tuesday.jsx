import React, { useEffect, useState } from 'react'

const Tuesday = () => {

    useEffect(() => {
        console.log("tick")

        return () => {console.log("untick")}
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default Tuesday
