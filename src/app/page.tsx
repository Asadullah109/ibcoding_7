'use client'

import { useState } from "react";

export default function Home() {

const [numValue, setNumValue] = useState(0)
const [textValue, setTextValue] = useState("")

function Increasement(){
  if(numValue >=0){
    setNumValue((num)=> num + 1)
    setTextValue("Number is Increaseing by 1")
  }
}

function Decreament(){
  if(numValue > 0){
    setNumValue((num)=> num - 1)
    setTextValue("Number is decreasing by 1")
  }
}


  return (
    <div className="bg-pink-400 px-5 flex justify-center items-center h-screen">
      <div className="bg-blue-600 space-y-5 px-2 py-5 rounded-md shadow-sm shadow-slate-300 w-[80%]">
        {/**number and text div */}
        <div className="space-y-2 text-center text-slate-100">
          <h1 className="text-4xl">{numValue}</h1>
          <p className="h-5 text-xs sm:text-2xl">{textValue}</p>
        </div>
      {/**Button div */}
      <div className="flex flex-col sm:flex-row gap-1 sm: gap-5 justify-center">
        <button onClick={Increasement}
         className="bg-green-600 px-5 py-2 rounded-lg text-white hover:bg-green-700">Increase</button>
        <button onClick={Decreament}
         className="bg-red-600 px-5 py-2 rounded-lg text-white hover:bg-red-700">Decrease</button>
      </div>

      </div>
    </div>
      );
}
