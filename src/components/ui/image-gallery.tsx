import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import womanInBureau from '@/assets/skill-backgrounds/woman-in-bureau.png'
import bauleiterin from '@/assets/skill-backgrounds/bauleiterin.png'
import softwareDeveloper from '@/assets/skill-backgrounds/software-developer2.png'
import warehouse2 from '@/assets/skill-backgrounds/warehouse2.png'

export const images = [
  womanInBureau,
  bauleiterin,
  softwareDeveloper,
  warehouse2,
  // "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  // "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  // "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
]

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const variants = {
  enter: (direction: number) => {
    return {
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      opacity: 0,
    }
  },
}


export const ImageGallery = ({ item = 0 }) => {
  const imageIndex = item % images.length
  const [[page, direction], setPage] = useState([imageIndex, 1])

  // const imageIndex = wrap(item % images.length, images.length, page)
  // const imageIndex = item % images.length
console.log(`imageIndex: ${imageIndex}, item: ${item}, ${item % images.length}`);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex].src}
          // custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1 },
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  )
}
