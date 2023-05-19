function ProductDetails() {
  return (
    <div className="flex flex-col justify-center max-w-sm">
      
      <div className="flex justify-center items-center pb-4">
        <img
          src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-ic1-400x400-9ff568e5738d.png?h=270&quality=medium&resize=1&w=480"
          alt="Star Wars Jedi: Survivor Standard Edition Logo"
          className="w-1/2"
        />
      </div>

      <a
        href=""
        className="flex p-2 border border-neutral-600 w-3/4 rounded gap-2 hover:bg-neutral-700 my-2"
      >
        <img
          src="https://cdn1.epicgames.com/gameRating/gameRating/ESRB_T_192_192x192-a0885066a34083cd647dc10db21717f1"
          alt="ESRB Rating"
          className="w-12 h-12"
        />
        <div className="flex flex-col">
          <p className="font-semibold">Teen</p>
          <p className="text-neutral-400">Violence, Mild Language</p>
        </div>
      </a>

      <p className="bg-neutral-700 w-fit p-1 rounded text-sm text-neutral-300">
        BASE GAME
      </p>

      <p>$69.99</p>

      <div className="flex flex-col gap-2">
        <button className="bg-blue-500 rounded py-3 transition-all ease-linear hover:bg-blue-400">
          BUY NOW
        </button>
        <button className="border border-neutral-400 rounded py-3 transition-all ease-linear hover:bg-neutral-700">
          ADD TO CART
        </button>
        <button className="border border-neutral-400 text-sm rounded transition-all ease-linear hover:bg-neutral-700">
          {/* PlusCircleIcon */}ADD TO WISHLIST
        </button>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Refund Type</p>
        <p>Self-Refundable</p>
        {/* add question mark icon */}
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Developer</p>
        <p>Respawn Entertainment</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Developer</p>
        <p>Respawn Entertainment</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Release Date</p>
        <p>04/27/23</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Platform</p>
        <div>
          {/* add platform icons */}
        </div>
      </div>

      <a href="#" className="flex gap-1 py-2 underline hover:no-underline">
        {/* add downward chevron icon */}
        See all Editions and Add-Ons
      </a>

      <div className="flex w-full gap-2 py-2">
        <button className="py-1 flex w-full justify-center rounded border border-neutral-400 transition-all ease-linear hover:bg-neutral-700">
          {/* ShareIcon */}
          SHARE
        </button>
        <button className="py-1 flex w-full justify-center rounded border border-neutral-400 transition-all ease-linear hover:bg-neutral-700">
          {/* FlagIcon */}
          REPORT
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;
