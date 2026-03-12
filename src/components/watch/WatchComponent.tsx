import React, { useState } from 'react'

const WatchComponent = () => {
    const [time, setTime]  = useState(new Date().toLocaleDateString());

    console.log()
  return (
    <div>{JSON.stringify(time)}</div>
  )
}

export default WatchComponent