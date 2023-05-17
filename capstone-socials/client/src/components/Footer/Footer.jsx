import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-screen text-white bg-[#2a2a2a] p-10 flex-col justify-around align-middle">
      <div className="w-full flex justify-between">
        <div className="flex w-1/12 justify-between my-2">
          <FaFacebookSquare />
          <FaTwitter />
          <FaYoutube />
        </div>
        <a href="" className="border-white border-4 p-2 px-4">
          ^
        </a>
      </div>
      <div className="flex">
        <div className="flex-col w-5/12">
          <h3 className="text-slate-500">Resources</h3>
          <ul
            className="flex-col flex-wrap h-40"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <li className="py-2 pr-4">
              <a
                className=""
                href="https://www.epicgames.com/affiliate/en-US/overview"
              >
                Support-A-Creator
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://store.epicgames.com/en-US/about">
                Distribute on Epic Games
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/site/careers">
                Careers
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/site/about">
                Company
              </a>
            </li>
            <li className="py-2 pr-4">
              <a
                className=""
                href="https://www.epicgames.com/site/fan-art-policy"
              >
                Fan Art Policy
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/site/ux">
                UX Research
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://store.epicgames.com/en-US/eula">
                Store EULA
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://dev.epicgames.com/">
                Online Services
              </a>
            </li>
            <li className="py-2 pr-4">
              <a
                className=""
                href="https://www.epicgames.com/site/community-rules"
              >
                Community Rules
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/site/news">
                Epic Newsroom
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-slate-500">Made By Epic Games</h3>
          <ul
            className="flex-col flex-wrap h-40"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/battlebreakers">
                Battle Breakers
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://store.epicgames.com/en-US/about">
                Fortnite
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/site/careers">
                Infinity Blade
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/site/about">
                Robo Recall
              </a>
            </li>
            <li className="py-2 pr-4">
              <a
                className=""
                href="https://www.epicgames.com/site/fan-art-policy"
              >
                Shadow Complex
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/site/ux">
                Unreal Tournament
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://store.epicgames.com/en-US/eula">
                Store EULA
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://dev.epicgames.com/">
                Online Services
              </a>
            </li>
            <li className="py-2 pr-4">
              <a
                className=""
                href="https://www.epicgames.com/site/community-rules"
              >
                Community Rules
              </a>
            </li>
            <li className="py-2 pr-4">
              <a className="" href="https://www.epicgames.com/site/news">
                Epic Newsroom
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>terms</p>
        <div>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
