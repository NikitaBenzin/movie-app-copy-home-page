import usePath from "../../hooks/usePath"
import type { SeasonLink } from "../../types/movieType"

interface Props {
  seasonLinks: SeasonLink[]
}

export function SeasonsLinks({ seasonLinks }: Props) {
  const path = usePath()

  return (
    <ul className="flex flex-col-reverse gap-6">
      {seasonLinks.length ? (
        seasonLinks.map((season, idx) => (
          <li key={idx}>
            <a
              className={`${
                season.link === path
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
    </ul>
  )
}
