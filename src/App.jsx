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
    <div className="w-full relative min-h-screen  text-white font-[Helvetica_Now_Display]">
      {/* {data[0].map((canvadets,index)=>(
        <Canvas details={canvadets}/>
      ))} */}
      {/** Basic Navbar with array links */}
      <div className="w-full h-screen text-white">
        <nav className="w-full p-8 flex justify-between z-50">
          <div className="brand text-2xl font-regular">thirtysixstudios</div>
          <div className="Links flex gap-10">
            {["Home","About","Projects","Contact"].map((link,index)=>(
              <a
                kwy={index}
                href={`#${link.toLowerCase()}`}
                className="text-md hover:text-gray-300"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="textcontainer w-full ps-[20%]">
        <div className="text w-[50%]">
          <h3 className="text-4xl leading-[1.5]">
          At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
          </h3>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
export default App