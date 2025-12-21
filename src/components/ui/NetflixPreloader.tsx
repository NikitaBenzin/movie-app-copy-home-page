import { motion } from "framer-motion"

export const NetflixPreloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      exit={{ opacity: 0, scale: 1.1 }} // Анимация исчезновения
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          filter: [
            "drop-shadow(0 0 5px rgba(229,9,20,0))",
            "drop-shadow(0 0 20px rgba(229,9,20,0.8))",
            "drop-shadow(0 0 5px rgba(229,9,20,0))",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Здесь ваше лого (SVG или текст) */}
        <h1 className="text-[#E50914] text-7xl font-black tracking-tighter uppercase italic">
          Netflix
        </h1>
      </motion.div>
    </motion.div>
  )
}
