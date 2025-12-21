import { motion } from "framer-motion"

export function MainCharacter() {
  return (
    <div className="flex justify-start">
      <motion.div
        className="absolute"
        initial={{ opacity: 0 }} // Начальное состояние
        animate={{ opacity: 1 }} // Состояние анимации
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img
          className="max-w-170"
          src="/peaky-blinders/main-character.png"
          alt="Movie main character."
          draggable={false}
        />
        <motion.img
          className="brightness-0 invert absolute top-0 -z-10 scale-99"
          src="/peaky-blinders/main-character.png"
          alt="Movie main character."
          draggable={false}
          initial={{ left: 0 }} // Начальное состояние
          animate={{ left: "20px" }} // Состояние анимации
          transition={{ duration: 0.8, delay: 2 }}
        />
      </motion.div>
    </div>
  )
}
