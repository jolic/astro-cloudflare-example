// import { withClickFlip } from "./withClickFlip"
import type { ComponentType } from "react"
import { motion, useSpring } from "framer-motion"
import React, { useState, useRef, useEffect } from "react"

// import './style.css'

// Learn more: https://www.framer.com/docs/guides/overrides/

const spring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
}


const CardFlip = ({width = 300, height = 300, front, back}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  // console.log('children', children);
  // console.log(children.length);
  

  const handleClick = () => {
      setIsFlipped((prevState) => !prevState)
  }

  const [rotateXaxis, setRotateXaxis] = useState(0)
  const [rotateYaxis, setRotateYaxis] = useState(0)
  const ref = useRef(null)

  const handleMouseMove = (event) => {
      const element = ref.current
      const elementRect = element.getBoundingClientRect()
      const elementWidth = elementRect.width
      const elementHeight = elementRect.height
      const elementCenterX = elementWidth / 2
      const elementCenterY = elementHeight / 2
      const mouseX = event.clientY - elementRect.y - elementCenterY
      const mouseY = event.clientX - elementRect.x - elementCenterX
      const degreeX = (mouseX / elementWidth) * 10 //The number is the rotation factor
      const degreeY = (mouseY / elementHeight) * 10 //The number is the rotation factor
      setRotateXaxis(degreeX)
      setRotateYaxis(degreeY)
  }

  const handleMouseEnd = () => {
      setRotateXaxis(0)
      setRotateYaxis(0)
  }

  const dx = useSpring(0, spring)
  const dy = useSpring(0, spring)

  useEffect(() => {
      dx.set(-rotateXaxis)
      dy.set(rotateYaxis)
  }, [rotateXaxis, rotateYaxis])

  console.log(`isFlipped: ${isFlipped}`);
  

  return (
      <motion.div
          onClick={handleClick}
          // transition={spring}
          style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
              // width: `${props.width}`,
              // height: `${props.height}`,
              width: `${width}px`,
              height: `${height}px`,
          }}
      >
          <motion.div
              ref={ref}
              whileHover={{ scale: 1.001 }} //Change the scale of zooming in when hovering
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseEnd}
              transition={spring}
              style={{
                  width: "100%",
                  height: "100%",
                  rotateX: dx,
                  rotateY: dy,
              }}
          >
              <div
                  style={{
                      perspective: "1200px",
                      transformStyle: "preserve-3d",
                      width: "100%",
                      height: "100%",
                  }}
                  className="cursor-pointer"
              >
                  <motion.div
                      animate={{ rotateY: isFlipped ? -180 : 0 }}
                      transition={spring}
                      style={{
                          width: "100%",
                          height: "100%",
                          zIndex: isFlipped ? 0 : 1,
                          backfaceVisibility: "hidden",
                          position: "absolute",
                      }}
                  >
                      <div className="relative w-full h-full bg-red-500 rounded-lg">
                        {front}
                      </div>
                  </motion.div>
                  <motion.div
                      initial={{ rotateY: 180 }}
                      animate={{ rotateY: isFlipped ? 0 : 180 }}
                      transition={spring}
                      style={{
                          width: "100%",
                          height: "100%",
                          zIndex: isFlipped ? 1 : 0,
                          backfaceVisibility: "hidden",
                          position: "absolute",
                      }}
                  >
                      <div className="relative w-full h-full bg-green-500 rounded-lg">
                        {back}
                      </div>
                  </motion.div>
              </div>
          </motion.div>
      </motion.div>
  )
}

export default CardFlip