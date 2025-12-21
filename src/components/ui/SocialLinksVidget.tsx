import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
export function SocialLinksVidget() {
  return (
    <motion.ul
      className="absolute top-1/2 right-0 -translate-x-full -translate-y-1/2 flex flex-col gap-6"
      initial={{ translateX: "100px", opacity: 0 }}
      animate={{ translateX: "0px", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <li className="bg-text-muted/10 rounded-full hover:scale-105 duration-300">
        <a href="#" className="flex items-center justify-center w-10 h-10">
          <Facebook />
        </a>
      </li>
      <li className="bg-text-muted/10 rounded-full hover:scale-105 duration-300">
        <a href="#" className="flex items-center justify-center w-10 h-10">
          <Instagram />
        </a>
      </li>
      <li className="bg-text-muted/10 rounded-full hover:scale-105 duration-300">
        <a href="#" className="flex items-center justify-center w-10 h-10">
          <Twitter />
        </a>
      </li>
      <li className="bg-text-muted/10 rounded-full hover:scale-105 duration-300">
        <a href="#" className="flex items-center justify-center w-10 h-10">
          <Youtube />
        </a>
      </li>
    </motion.ul>
  )
}
