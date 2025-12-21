import { MOVIES_MOCK } from "../mock-data"
import type { Movie } from "../types/movieType"
import { BackgroundImage } from "./ui/BackgroundImage"
import { MainCharacter } from "./ui/MainCharacter"
import { MovieDescription } from "./ui/MovieDescription"
import { SeasonsLinks } from "./ui/SeasonsLinks"
import { SectionWithMovieSlider } from "./ui/SectionWithMovieSlider"
import { SocialLinksVidget } from "./ui/SocialLinksVidget"

export function MainContent() {
  const data = MOVIES_MOCK as Movie[]

  return (
    <main className="p-12 relative bg-bg h-screen grid grid-rows-[auto_253px] justify-items-center">
      <BackgroundImage imageLink={data[0].assets.background} />

      <div className="relative z-10 grid grid-cols-2 font-saira! tracking-wider w-full max-w-495 max-h-235.5">
        <div className="flex gap-12 items-center">
          <SeasonsLinks seasonLinks={data[0].seasons} />

          <MovieDescription movieDescription={data[0]} />
        </div>
        <MainCharacter />
        <SocialLinksVidget />
      </div>
      <SectionWithMovieSlider sectionTitle="Recommandation" movies={data} />
    </main>
  )
}
