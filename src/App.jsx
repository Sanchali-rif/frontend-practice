import "./index.css"
import Canvas from "./Canvas"
import data from "./data" 

function App(){
  return (
    <>
    <div className="w-full min-h-screen bg-black text-white">
      {data.map((item,index)=>(
        <div key={index}>
          {item.map((canvadets,index)=>(
            <canvas details={canvadets}/>
          ))}
        </div>
      ))}
      
    </div>
    </>
  )
}
export default App