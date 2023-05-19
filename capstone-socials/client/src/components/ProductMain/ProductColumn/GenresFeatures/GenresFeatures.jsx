function GenresFeatures() {
  return (
    <div>
      <div className="flex flex-row pt-10">
        <div className="border border-gray-700"></div>
        <div className="flex flex-col justify-left ml-5 text-gray-300">
          Genres
          <div className="flex flex-row justify-left w-[400px] h-[35]">
            <a className="underline text-white" href="#">
              Action
            </a>
            <span>,&nbsp;</span>
            <a className="underline text-white" href="#">
              Adventure
            </a>
          </div>
        </div>
        <div className="border border-gray-700 items-center h-[20]"></div>

        <div className="border border-gray-700"></div>
        <div className="flex flex-col justify-left ml-5 text-gray-300">
          Features
          <div className="flex flex-row justify-left w-[400px] h-[35]">
            <a className="underline text-white" href="#">
              Single Player
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresFeatures;
