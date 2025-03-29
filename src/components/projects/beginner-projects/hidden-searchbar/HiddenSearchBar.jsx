import { useState } from "react"
import SearchIcon from "../../../icons/SearchIcon";
import AppHeading from "../../../common/AppHeading";

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
    <div className="p-4" >
      <AppHeading sno={6} title={"Search Icon Toggler App"} />
      {!showInput && <div className="flex gap-1 items-center">
        <span onClick={handleClick}><SearchIcon /></span>
        <p className="mt-1">Click on search icon to search...</p>
      </div>
      }
      {showInput && <div className="flex"><input placeholder="Search something..." className="border border-slate-800 px-4 py-1.5 outline-0 hover:border-gray-500 text-black" />
        <button className="bg-slate-800 text-white w-[37px] text-xs" onClick={handleCancel}>X</button></div>
      }
    </div >
  )
}

export default HiddenSearchBarApp