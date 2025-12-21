import { PUBLIC_PAGE } from "../config/pages/public-page.config"
import usePath from "../hooks/usePath"

export function Header() {
  const path = usePath()

  return (
    <header className="fixed w-full flex justify-center items-center py-6">
      <nav>
        <ul className="flex gap-12 items-center">
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
            <img className="w-18" src="/netflix-logo.png" alt="Netflix logo" />
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
        </ul>
      </nav>
    </header>
  )
}
