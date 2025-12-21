import { ChevronLeft } from "lucide-react"
import { MOVIES_MOCK } from "../mock-data"
import type { Movie } from "../types/movieType"
import { BackgroundImage } from "./ui/BackgroundImage"
import { MainCharacter } from "./ui/MainCharacter"
import { MovieDescription } from "./ui/MovieDescription"
import { SeasonsLinks } from "./ui/SeasonsLinks"
import { SocialLinksVidget } from "./ui/SocialLinksVidget"
import { TrailerSlider } from "./ui/TrailerSlider"

export function MainContent() {
  const data = MOVIES_MOCK as Movie[]

  return (
    <main className="p-12 relative bg-bg h-screen grid grid-rows-[auto_253px] justify-items-center">
      <BackgroundImage imageLink={data[0].assets.background} />

      <div className="relative z-10 grid grid-cols-2 font-saira! tracking-wider w-full max-w-495">
        <div className="flex gap-12 items-center">
          <SeasonsLinks seasonLinks={data[0].seasons} />

          <MovieDescription movieDescription={data[0]} />
        </div>
        <MainCharacter />
        <SocialLinksVidget />
      </div>
      <div className="relative z-10 flex flex-col gap-6 max-w-495">
        <div className="flex justify-between relative z-10">
          <h3 className="font-light">Recommendation</h3>
          <div className="flex gap-4">
            <button className="border border-text rounded-full w-10 h-10 flex justify-center items-center">
              <ChevronLeft />
            </button>
            <button className="border border-text rounded-full w-10 h-10 flex justify-center items-center bg-text text-bg">
              <ChevronLeft className="rotate-180" />
            </button>
          </div>
        </div>
        <TrailerSlider movies={data} />
      </div>
    </main>
  )
}
