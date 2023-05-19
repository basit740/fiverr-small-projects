function EditionsAddons() {
  //useEffect to fetch EditionsAddons data from API
  return (
    <div className="max-w-5xl">
      <div>
        <h1 className="text-xl my-5">Editions</h1>
        <div className="flex flex-col">
          <div className="flex bg-neutral-800 border-b border-neutral-700">
            <img
              className="w-72 h-40"
              src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-s1-2560x1440-9475e1c6c933.jpg?h=270&quality=medium&resize=1&w=480"
              alt="Base Game Edition Image"
            />
            <div>
              <div className="flex flex-row">
                <div className="flex flex-row justify-center items-center py-2 m-3 px-4 bg-neutral-700 rounded-sm">BASE GAME</div>
                <div className="flex items-center m-2">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor">
                    STAR WARS Jedi: Survivor™ Standard Edition
                  </a>
                </div>
              </div>
              <div className="flex items-center m-3">
                <p className="flex flex-wrap text-neutral-400">
                  The story of Cal Kestis continues in Star Wars Jedi:
                  Survivor™, a third-person galaxy-spanning action-adventure
                  game from Respawn Entertainment and Lucasfilm Games.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center p-5 gap-3 bg-neutral-800">
            <div className="text-lg">$69.99</div>
            <button className="flex justify-center items-center px-12 py-3 border border-neutral-700 rounded-sm transition-all ease-linear hover:bg-neutral-700">ADD TO CART</button>
            <button className="flex justify-center items-center px-8 py-3 border border-neutral-700 rounded-sm transition-all ease-linear hover:bg-neutral-700">ADD TO WISHLIST</button>
          </div>
        </div>
        <div className="flex flex-col my-5">
          <div className="flex bg-neutral-800 border-b border-neutral-700">
            <img
              className="w-72 h-40"
              src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivordeluxeedition-respawn-editions-s1-2560x1440-d3eeb6db2b78.jpg?h=270&quality=medium&resize=1&w=480"
              alt="Deluxe Edition Image"
            />
            <div>
              <div className="flex flex-row">
                <div className="flex flex-row justify-center items-center py-2 m-3 px-4 bg-neutral-700 rounded-sm">EDITION</div>
                <div className="flex items-center m-2">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor--deluxe-edition">
                    STAR WARS Jedi: Survivor™ Deluxe Edition
                  </a>
                </div>
              </div>
              <div className="flex items-center px-3">
                <p className="text-neutral-400">
                  Unlock exclusive cosmetic items inspired by Han Solo™ and Luke
                  Skywalker™, as seen in STAR WARS: A New Hope, with Star Wars
                  Jedi: Survivor Deluxe Edition*!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center p-5 gap-3 bg-neutral-800">
            <div className="text-lg">$89.99</div>
            <button className="flex justify-center items-center px-12 py-3 border border-neutral-700 rounded-sm transition-all ease-linear hover:bg-neutral-700">ADD TO CART</button>
            <button className="flex justify-center items-center px-8 py-3 border border-neutral-700 rounded-sm transition-all ease-linear hover:bg-neutral-700">ADD TO WISHLIST</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl my-5">Add-Ons</h1>
        <div className="flex flex-col my-5">
          <div className="flex bg-neutral-800 border-b border-neutral-700">
            <img
              className="w-72 h-40"
              src="https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorDeluxeUpgrade_Respawn_DLC_S1_2560x1440-7c9c63aa494f15aa1d277540e60306bf?h=270&quality=medium&resize=1&w=480"
              alt="Deluxe Upgrade Image"
            />
            <div>
              <div className="flex flex-row">
                <div className="flex flex-row justify-center items-center p-2 m-3 px-4 bg-neutral-700 rounded-sm">ADD-ON</div>
                <div className="flex items-center m-2">
                  <a href="https://store.epicgames.com/en-US/p/star-wars-jedi-survivor--deluxe-upgrade">
                    STAR WARS Jedi: Survivor™ - Deluxe Upgrade
                  </a>
                </div>
              </div>
              <div className="flex items-center m-3">
                <p className="text-neutral-400">Upgrade to unlock exclusive cosmetic items!</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center p-5 gap-3 bg-neutral-800">
            <div className="text-lg">$20</div>
            <button className="flex justify-center items-center px-12 py-3 border border-neutral-700 rounded-sm transition-all ease-linear hover:bg-neutral-700">ADD TO CART</button>
            <button className="flex justify-center items-center px-8 py-3 border border-neutral-700 rounded-sm transition-all ease-linear hover:bg-neutral-700">ADD TO WISHLIST</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditionsAddons;
