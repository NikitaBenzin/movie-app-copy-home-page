import { Play } from "lucide-react"
import type { MovieDescription } from "../../types/movieType"

interface Props {
  movieDescription: MovieDescription
}

export function MovieDescription({ movieDescription }: Props) {
  const { ageLimit, description, duration, rating, releaseYear } =
    movieDescription
  return (
    <div className="flex flex-col items-start gap-6">
      <img
        className="w-85"
        src="/peaky-blinders/film-logo.png"
        alt="Movie name."
      />
      <div className="text-text-muted! flex gap-6">
        <span>{releaseYear}</span>
        <span className="border border-text-muted rounded-sm px-2.5">
          {ageLimit}
        </span>
        <span>IMDb {rating}</span>
        <span>{duration}</span>
      </div>
      <p className="font-extralight max-w-140">{description}</p>
      <div className="flex items-center gap-4">
        <button className="w-15 h-15 bg-accent rounded-full flex items-center justify-center hover:scale-105 duration-300">
          <Play className="text-text" fill="var(--text)" size={20} />
        </button>
        <span className="uppercase tracking-[0.15rem]">Watch Trailer</span>
      </div>
    </div>
  )
}
