import "./index.css"
import data from "./data"
import Canvas from "./Canvas"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";



function App() {

  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();
  },[])

  return (
    <>
    <div className="w-full relative min-h-screen  text-white">
      {data[0].map((canvadets,index)=>(
        <Canvas details={canvadets}/>
      ))}
    </div>
    <div className="w-full relative min-h-screen  text-white">
      {data[1].map((canvadets,index)=>(
        <Canvas details={canvadets}/>
      ))}
    </div>
    <div className="w-full relative min-h-screen  text-white">
      {data[2].map((canvadets,index)=>(
        <Canvas details={canvadets}/>
      ))}
    </div>
    </>
  )
}
export default App