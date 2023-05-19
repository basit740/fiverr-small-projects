import { StarIcon } from "@heroicons/react/24/solid";

function ProductRating() {
  return (
    <div className="flex items-center gap-1 my-2">
      <div className="flex">
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
        <StarIcon className="h-4 w-4" />
      </div>
      <p className="text-neutral-400 bg-neutral-800 w-fit px-1 py-0.5 rounded">
        4.4
      </p>
      <span className="text-lg">🦖</span>
      <p>Great Boss Battles</p>
    </div>
  );
}

export default ProductRating;
