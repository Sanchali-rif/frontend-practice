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
      {data[0].map((canvadets,index)=>(
        <Canvas details={canvadets}/>
      ))}
      {/** Basic Navbar with array links */}
      {(() => {
        const navLinks = [
          { name: 'Home', href: '#' },
          { name: 'About', href: '#about' },
          { name: 'Projects', href: '#projects' },
          { name: 'Contact', href: '#contact' }
        ];
        return (
          <nav className="w-full bg-gray-900 px-8 py-4 flex items-center">
            <div className="text-2xl font-bold mr-8">MySite</div>
            <ul className="flex space-x-6">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:underline text-white">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        );
      })()}
 
    </div>
    </>
  )
}
export default App