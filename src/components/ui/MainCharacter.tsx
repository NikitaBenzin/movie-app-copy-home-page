export function MainCharacter() {
  return (
    <div className="flex justify-start">
      <div className="absolute">
        <img
          className="max-w-170"
          src="/peaky-blinders/main-character.png"
          alt="Movie main character."
        />
        <img
          className="brightness-0 invert absolute top-0 left-5 -z-10 scale-99"
          src="/peaky-blinders/main-character.png"
          alt="Movie main character."
        />
      </div>
    </div>
  )
}
