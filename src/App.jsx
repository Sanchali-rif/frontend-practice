import "./index.css"
import data from "./data"
import Canvas from "./Canvas"

function App() {
  return (
    <>
    <div className="w-full relative min-h-screen bg-black text-white">
      {data[0].map((canvadets,index)=>(
        <Canvas details={canvadets}/>
      ))}
        </div>
    </>
  )
}
export default App