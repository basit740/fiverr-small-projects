import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function SecondaryNav() {
  return (
    <div className="flex justify-between items-center my-6">
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <span className="bg-neutral-800 flex items-center justify-center p-3 rounded-l-3xl">
            <MagnifyingGlassIcon className="h-4 w-4 text-neutral-400" />
          </span>
          <input
            type="text"
            placeholder="Search store"
            className="bg-neutral-800 rounded-r-3xl py-2 pr-4 placeholder:text-sm"
          />
        </div>

        <div className="flex gap-2 text-neutral-400">
          <p>Discover</p>
          <p>Browse</p>
          <p>News</p>
        </div>
      </div>

      <div className="flex gap-2 text-neutral-400">
        <p>Wishlist</p>
        <p>Cart</p>
      </div>
    </div>
  );
}

export default SecondaryNav;
