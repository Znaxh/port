import React from 'react'
import {
    SiVisualstudiocode,
    SiPostman,
    SiWindows10,
    SiNetlify,
    SiVercel,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <div className="px-4 font-raleway mt-36">
      <div className="flex font-semibold justify-center text-3xl mb-10 space-x-1 text-white">
        <div>Tools I</div>
        <span className="text-indigo-200">Use</span>
      </div>
      <div className="flex flex-wrap  justify-center gap-4 px-10">
        <div className="text-6xl border border-white rounded-md w-48 h-28 py-2 flex items-center justify-center transition-transform hover:scale-110">
          <SiVisualstudiocode className='text-white'/>
        </div>
        <div className="text-6xl border border-white rounded-md w-48 h-28 py-2 flex items-center justify-center transition-transform hover:scale-110">
          <SiPostman className='text-white'/>
        </div>
        <div className="text-6xl border border-white rounded-md w-48 h-28 py-2 flex items-center justify-center transition-transform hover:scale-110">
          <SiWindows10 className='text-white'/>
        </div>
        <div className="text-6xl border border-white rounded-md w-48 h-28 py-2 flex items-center justify-center transition-transform hover:scale-110">
          <SiNetlify className='text-white'/>
        </div>
        <div className="text-6xl border border-white rounded-md w-48 h-28 py-2 flex items-center justify-center transition-transform hover:scale-110">
          <SiVercel className='text-white'/>
        </div>
      </div>
    </div>
  )
}

export default Toolstack
