import "./index.css"
import data from "./data"
import Canvas from "./Canvas"

function App() {
  return (
    <div className="w-full relative min-h-screen bg-black text-white">
      {data.map((item, index) => (
        <div key={index} className="w-full h-screen relative">
          {item.map((canvasDets, i) => (
            <Canvas key={i} details={canvasDets} />
          ))}
        </div>
      ))}
    </div>
  )
}
export default App