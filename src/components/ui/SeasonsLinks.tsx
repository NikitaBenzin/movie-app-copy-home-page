import { motion } from "framer-motion"
import usePath from "../../hooks/usePath"
import type { SeasonLink } from "../../types/movieType"
interface Props {
  seasonLinks: SeasonLink[]
}

export function SeasonsLinks({ seasonLinks }: Props) {
  const path = usePath()

  return (
    <motion.ul
      className="flex flex-col-reverse gap-6"
      initial={{ translateX: "-100px", opacity: 0 }}
      animate={{ translateX: "0px", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {seasonLinks.length ? (
        seasonLinks.map((season, idx) => (
          <li key={idx}>
            <a
              className={`${
                season.link === path || idx === 0
                  ? "text-text border-l border-text"
                  : "text-text-muted"
              } [writing-mode:vertical-rl] pl-2 rotate-180`}
              href={season.link}
            >
              Season {idx + 1}
            </a>
          </li>
        ))
      ) : (
        <li className="text-text border-l border-text [writing-mode:vertical-rl] pl-2 rotate-180">
          Film
        </li>
      )}
    </motion.ul>
  )
}
