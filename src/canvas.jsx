import { useEffect } from 'react'
import canvasimages from "./canvasimages"

function Canvas() {
  useEffect(()=>{
    console.log(canvasimages)
  })
  return (
    <canvas id="canvas"></canvas>
  )
}

export default Canvas