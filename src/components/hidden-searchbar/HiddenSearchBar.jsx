import { useState } from "react"
import SearchIcon from "../icons/SearchIcon";

const INITIAL_STATE = {
  bgColor: '#000',
  textColor: '#fff',
}
const HiddenSearchBarApp = () => {
  const [showInput, setShowInput] = useState(false)
  const [color, setColor] = useState(INITIAL_STATE);

  const handleClick = () => {
    setColor({
      bgColor: '#fff',
      textColor: '#000'
    });
    setShowInput(true)
  }

  const handleCancel = () => {
    setShowInput(false)
    setColor(INITIAL_STATE)
  }

  // e.target.className==="container"

  return (
    <div className="p-4" style={{ backgroundColor: color.bgColor, color: color.textColor }}>
      <h1 className={'title'}>Project-6: <em>Hidden Search Bar App</em></h1>

      {!showInput && <div className="flex gap-1 items-center">
        <span onClick={handleClick}><SearchIcon /></span>
        <p className="mt-1">Click on search icon to search...</p>
      </div>
      }
      {showInput && <div className="flex"><input placeholder="Search something..." className="border border-gray-200 px-4 py-1.5 outline-0 hover:border-gray-500" />
        <button className="bg-red-500 text-white w-[37px] text-xs" onClick={handleCancel}>X</button></div>
      }
    </div >
  )
}

export default HiddenSearchBarApp