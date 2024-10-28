import { useState, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
// import { ImageSlider } from './image-slider'
import { ImageGallery } from './image-gallery'

import { motion, AnimatePresence } from "framer-motion"

import womanInBureau from '@/assets/skill-backgrounds/woman-in-bureau.png'
import bauleiterin from '@/assets/skill-backgrounds/bauleiterin.png'
import bauleiterin2 from '@/assets/skill-backgrounds/bauleiterin2.png'
import controller from '@/assets/skill-backgrounds/controller.png'
import controller3 from '@/assets/skill-backgrounds/controller3.png'
import controller4 from '@/assets/skill-backgrounds/controller4.png'
import controller5 from '@/assets/skill-backgrounds/controller5.png'
import softwareDeveloper from '@/assets/skill-backgrounds/software-developer2.png'
import warehouse1 from '@/assets/skill-backgrounds/warehouse1.png'
import warehouse2 from '@/assets/skill-backgrounds/warehouse2.png'

const images = [
  softwareDeveloper,
  controller3,
  warehouse2,
  controller,
  controller5,
  womanInBureau,
  bauleiterin2,
  controller4,
]

const delayInMs = 2500

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



export const HeroAnimation = () => {
  const [page, setPage] = useState(0)

  const increment = () => {
    setPage((page) => page + 1)
  }

  const imageIndex = page % images.length

  return (
    /*
    Welche Skills brauche ich als …Webentwickler
Controller
Leiter Warenlager
Personalentwickler

Später auch…

Wie lerne ich das Skill…
Figma anwenden
Planungsziele entwickeln
Inventurplanung
Agile Führungskonzepte

*/
    <div className="flex flex-col items-center justify-center w-full h-screen" style={{height: 540}}>
      <div className="flex text-white text-sm md:text-2xl max-w-xl mt-6 text-center absolute z-10">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            'What skills do I need as aㅤWeb developer?',
            delayInMs,
            increment,
            'What skills do I need as aㅤController?',
            delayInMs,
            increment,
            'What skills do I need as aㅤWarehouse Manager?',
            delayInMs,
            increment,
            'What skills do I need as aㅤPersonnel developer?',
            delayInMs,
            increment,
            'How do I learn to use the Figma skill?',
            delayInMs,
            increment,
            'How do I learn the skill Develop planning goals?',
            delayInMs,
            increment,
            'How do I learn the inventory planning skill?',
            delayInMs,
            increment,
            'How do I learn the agile leadership concepts?',
            delayInMs,
            increment,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          speed={50}
          style={{ fontSize: '2em', lineHeight: '1em', letterSpacing: '0em', display: 'inline-block', color: '#fff' }}
          className="drop-shadow-xl h-28 text-shadow shadow-black pt-32"
        />
      </div>
      {/* <div className="z-10 text-red">Called {iteration.current} {page}</div> */}
      <div className="bg-black">
        {/* <ImageSlider item={iteration} /> */}
        {/* <ImageGallery item={iteration} /> */}
        {/* <AnimatePresence initial={true} custom={1}> */}
        <motion.img
          // key={iteration?.current}
          key={page}
          // src={images[iteration?.current].src}
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
        {/* </AnimatePresence> */}
      </div>
      {/* <div>
        <img src={womanInBureau.src} alt="woman in bureau" className="w-full h-full object-cover absolute top-0 left-0 z-0" />
      </div> */}
    </div>
  );
};