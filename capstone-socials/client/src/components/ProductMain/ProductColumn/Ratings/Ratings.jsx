import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function Ratings() {
  return (
    <div>
      <h1 className="text-xl">Ratings</h1>
      <div className="flex items-end justify-between mt-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-blue-500 h-[4.5rem] w-[4.5rem] rounded-full flex justify-center items-center">
              <div className="bg-neutral-900 rounded-full h-16 w-16 text-neutral-300 flex justify-center items-center">
                89%
              </div>
            </div>
            <p>Critics Reccomend</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-blue-500 h-[4.5rem] w-[4.5rem] rounded-full flex justify-center items-center">
              <div className="bg-neutral-900 rounded-full h-16 w-16 text-neutral-300 flex justify-center items-center">
                85
              </div>
            </div>
            <p>Top Critic Average</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-blue-500 h-[4.5rem] w-[4.5rem] rounded-full flex justify-center items-center">
              <div className="bg-neutral-900 rounded-full h-16 w-16 text-neutral-300 flex justify-center items-center">
                Mighty
              </div>
            </div>
            <p>Critics Recommend</p>
          </div>
        </div>

        <a
          href={
            {
              /* TODO */
            }
          }
          className="text-neutral-400 flex items-center gap-1"
        >
          SEE ALL REVIEWS
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="flex gap-4 my-4">
        <div className="bg-neutral-800 p-4">
          <h2>Game Informer</h2>
          <h3 className="text-neutral-400">by Matt Miller</h3>
          <hr className="border-neutral-700 my-4" />
          <p className="mb-4">9.25/10</p>
          <p className="text-neutral-400 mb-4">
            Developer Respawn Entertainment clearly took a measured and
            thoughtful approach to analyze what worked and what didn't in its
            last Star Wars game, and Jedi: Survivor feels like a worthy attempt
            at evolution. It captures the magic of Star Wars as well as anything
            in the current canon, and it's a stellar adventure in its own right.
          </p>
          <p>
            <a
              className="underline flex items-center text-neutral-400 gap-1"
              href={
                {
                  /* TODO */
                }
              }
            >
              READ FULL REVIEW
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </p>
        </div>
        <div className="bg-neutral-800 p-4">
          <h2>Game Informer</h2>
          <h3 className="text-neutral-400">by Matt Miller</h3>
          <hr className="border-neutral-700 my-4" />
          <p className="mb-4">9.25/10</p>
          <p className="text-neutral-400 mb-4">
            Developer Respawn Entertainment clearly took a measured and
            thoughtful approach to analyze what worked and what didn't in its
            last Star Wars game, and Jedi: Survivor feels like a worthy attempt
            at evolution. It captures the magic of Star Wars as well as anything
            in the current canon, and it's a stellar adventure in its own right.
          </p>
          <p>
            <a
              className="underline flex items-center text-neutral-400 gap-1"
              href={
                {
                  /* TODO */
                }
              }
            >
              READ FULL REVIEW
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </p>
        </div>
        <div className="bg-neutral-800 p-4">
          <h2>Game Informer</h2>
          <h3 className="text-neutral-400">by Matt Miller</h3>
          <hr className="border-neutral-700 my-4" />
          <p className="mb-4">9.25/10</p>
          <p className="text-neutral-400 mb-4">
            Developer Respawn Entertainment clearly took a measured and
            thoughtful approach to analyze what worked and what didn't in its
            last Star Wars game, and Jedi: Survivor feels like a worthy attempt
            at evolution. It captures the magic of Star Wars as well as anything
            in the current canon, and it's a stellar adventure in its own right.
          </p>
          <p>
            <a
              className="underline flex items-center text-neutral-400 gap-1"
              href={
                {
                  /* TODO */
                }
              }
            >
              READ FULL REVIEW
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </p>
        </div>
      </div>
      <p className="text-sm text-neutral-400">Reviews provided by OpenCritic</p>
    </div>
  );
}

export default Ratings;
