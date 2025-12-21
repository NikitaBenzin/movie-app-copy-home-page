import { Play } from "lucide-react"
import usePath from "../../hooks/usePath"
import type { Movie } from "../../types/movieType"

interface Props {
  movies: Movie[]
}

export function TrailerSlider({ movies }: Props) {
  const path = usePath()
  return (
    <ul className="flex justify-between gap-6 bg-bg slider-shadow">
      {movies.map((movie, idx) => (
        <li key={idx} className="relative group">
          {path === `/${movie.id}` ? (
            <img
              className="max-w-84 max-h-47.25 "
              src={movie.assets.videoCover}
              alt="Movie trailer cover."
            />
          ) : (
            <a href={`/${movie.id}`}>
              <button className="absolute z-10 top-1/2 left-1/2 -translate-1/2 w-15 h-15 bg-text-muted rounded-full flex items-center justify-center group-hover:scale-105 duration-300">
                <Play className="text-text" fill="var(--text)" size={20} />
              </button>
              <img
                className="max-w-84 max-h-47.25 brightness-30 group-hover:brightness-100 duration-500"
                src={movie.assets.videoCover}
                alt="Movie trailer cover."
              />
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
