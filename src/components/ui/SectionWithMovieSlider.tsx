import { motion } from "framer-motion"
import { ChevronLeft, Play } from "lucide-react"
import { useState } from "react"
import usePath from "../../hooks/usePath"
import type { Movie } from "../../types/movieType"
interface Props {
  sectionTitle: string
  movies: Movie[]
}

export function SectionWithMovieSlider({ sectionTitle, movies }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const path = usePath()
  const itemsPerPage = 5
  const totalPages = Math.ceil(movies.length / itemsPerPage)
  const next = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages)
  }

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, translateY: "50px" },
    show: { opacity: 1, translateY: "0px" },
  }

  return (
    <div className="relative z-10 flex flex-col gap-6 max-w-495 overflow-hidden">
      <motion.div
        className="flex justify-between relative z-10"
        initial={{ translateY: "50px", opacity: 0 }}
        animate={{ translateY: "0px", opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h3 className="font-light">{sectionTitle}</h3>
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="border border-text rounded-full w-10 h-10 flex justify-center items-center"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="border border-text rounded-full w-10 h-10 flex justify-center items-center bg-text text-bg"
          >
            <ChevronLeft className="rotate-180" />
          </button>
        </div>
      </motion.div>
      {/* flex justify-between gap-6 bg-bg slider-shadow  */}
      <motion.ul
        className="flex bg-bg gap-7 slider-shadow transition-transform duration-700 ease-[cubic-bezier(0.5,0,0.1,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {movies.map(movie => (
          <motion.li
            key={movie.id}
            className="relative group max-h-47.25 min-w-[50%] sm:min-w-[33.33%] lg:min-w-[calc(20%-1.5rem)] lg:max-w-84"
            variants={item}
          >
            {path === `/${movie.id}` ? (
              <img
                // className="max-w-84 max-h-47.25 rounded-sm"
                className="w-full h-full object-cover rounded-sm"
                src={movie.assets.videoCover}
                alt="Movie trailer cover."
                draggable={false}
              />
            ) : (
              <a href={`/${movie.id}`} className="w-full h-full">
                <button className="absolute z-10 top-1/2 left-1/2 -translate-1/2 w-15 h-15 bg-text-muted rounded-full flex items-center justify-center group-hover:scale-105 duration-300">
                  <Play className="text-text" fill="var(--text)" size={20} />
                </button>
                <img
                  className="w-full h-full object-cover rounded-sm brightness-30 group-hover:brightness-100 duration-500"
                  src={movie.assets.videoCover}
                  alt="Movie trailer cover."
                  draggable={false}
                />
              </a>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
