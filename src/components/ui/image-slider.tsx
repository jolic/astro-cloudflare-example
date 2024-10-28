import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import womanInBureau from '@/assets/skill-backgrounds/woman-in-bureau.png'
import bauleiterin from '@/assets/skill-backgrounds/bauleiterin.png'

const images = [
    womanInBureau,
    bauleiterin,
]

export const ImageSlider = ({ item = 0 }) => {
//   const [[page, direction], setPage] = useState([0, 0]);

//   const paginate = (newDirection) => {
//     setPage([page + newDirection, newDirection]);
//   };
  return (
    <>
      <AnimatePresence initial={false}>
        <motion.img
          className="img"
          src={images[0]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </>
  )
}
