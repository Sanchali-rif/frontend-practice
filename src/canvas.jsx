import { useEffect,useRef,useState } from 'react'
import canvasimages from "./canvasimages"

function Canvas() {
  const canvasRef=useRef(null)
  const [index,setIndex]=useState({value:2})
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvasimages.length > 0) {
      const ctx = canvas.getContext("2d");
      const img = new window.Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
      img.src = canvasimages[index.value];
    }
  }, [index]);
  return (
    <canvas id="canvas" ref={canvasRef} className='w-[18rem] h-[18rem]'></canvas>
  )
}

export default Canvas