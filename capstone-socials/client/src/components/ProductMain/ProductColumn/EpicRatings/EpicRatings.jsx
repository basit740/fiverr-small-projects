import { StarIcon } from "@heroicons/react/24/solid";

function EpicRatings() {
  return (
    <div className="flex flex-col my-6">
      <h2 className="text-xl">Epic Player Ratings</h2>
      <h3 className="text-neutral-400">Captured from players in the Epic Games ecosystem.</h3>

      <div className="flex justify-center gap-2 items-center mt-4">
        <p className="text-4xl">4.4</p>
        <div className="flex">
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
          <StarIcon className="h-8 w-8" />
        </div>
      </div>

      <div className="bg-neutral-800 mt-4 w-fit px-8 py-12 flex flex-col items-center rounded">
        <span className="text-5xl">🦖</span>
        <p className="text-sm text-neutral-400">This game has</p>
        <p className="text-2xl font-bold w-32 text-center">Great Boss Battles</p>
      </div>
    </div>
  );
}

export default EpicRatings;
