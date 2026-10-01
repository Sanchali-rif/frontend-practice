import "./index.css"
import Canvas from "./Canvas"

function App(){
  return (
    <>
    <div className="w-full min-h-screen bg-black text-white">
      <Canvas startingIndex={0}/>
      <Canvas startingIndex={150}/>
      <Canvas startingIndex={300}/>
    </div>
    </>
  )
}
export default App