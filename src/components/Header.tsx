import { PUBLIC_PAGE } from "../config/pages/public-page.config"
import usePath from "../hooks/usePath"

import { motion } from "framer-motion"

export function Header() {
  const path = usePath()
  return (
    <header className="fixed z-10 w-full flex justify-center items-center py-6">
      <div className="absolute left-1/2 top-0 -translate-1/2 w-2xl h-128 bg-red-600/10 blur-3xl rounded-full"></div>
      <nav>
        <motion.ul
          className="flex gap-12 items-center"
          initial={{ translateY: "-50px", scale: "10%" }}
          animate={{ translateY: "0px", scale: "100%" }}
          transition={{ duration: 0.8 }}
        >
          <li>
            <a
              className={`${
                path === PUBLIC_PAGE.HOME ? "text-text" : "text-text-muted"
              }`}
              href={PUBLIC_PAGE.HOME}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`${
                path === PUBLIC_PAGE.MOVIES ? "text-text" : "text-text-muted"
              }`}
              href={PUBLIC_PAGE.MOVIES}
            >
              Movies
            </a>
          </li>
          <li>
            <img
              className="w-18"
              src="/netflix-logo.png"
              alt="Netflix logo"
              draggable={false}
            />
          </li>
          <li>
            <a
              className={`${
                path === PUBLIC_PAGE.SERIES ? "text-text" : "text-text-muted"
              }`}
              href={PUBLIC_PAGE.SERIES}
            >
              Series
            </a>
          </li>
          <li>
            <a
              className={`${
                path === PUBLIC_PAGE.KIDS ? "text-text" : "text-text-muted"
              }`}
              href={PUBLIC_PAGE.KIDS}
            >
              Kids
            </a>
          </li>
        </motion.ul>
      </nav>
    </header>
  )
}
