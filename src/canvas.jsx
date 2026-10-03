import { useEffect,useRef,useState } from 'react'
import canvasimages from "./canvasimages"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Canvas({details}) {
  
  const{startIndex,numImages,duration,size,top,left,zIndex}=details
  const canvasRef=useRef(null)
  const [index,setIndex]=useState({value:startIndex})

  useGSAP(()=>{
    gsap.to(index,{
      value:startIndex+numImages-1,
      duration:duration,
      ease:"linear",
      repeat:-1,
      onUpdate:()=>{
        setIndex({value:Math.round(index.value)})
      }
    })
  })
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
    <canvas id="canvas" ref={canvasRef} className={`w-[${size}px] h-[${size}px]`}></canvas>
  )
}

export default Canvas