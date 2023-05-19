import { useEffect, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';


function MediaCarousel() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([0]);


  useEffect(() => {
    fetch('http://localhost:3000/api/media/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  const pics = [
    {
      url: 'https://drive.google.com/uc?export=view&id=1y3XwAuDWyywvEoMTC9b-KD32bMV4qD5c'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=14efnOVzSY9tSBtkW4t-VlkJjWePng0Gt'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1g2TVr_8p7Y7MexxMmI_3bVXqXd4EZ2Dq'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1vsiuKXAj00PJLNOnL_rYbPW0HpmHyJFf'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1b6ooypVex_sKyaRcTbo8iHO1A5mfNYcc'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1oQHPEw3fQaT4yUd1x2ojzGQG5wOxw2SO'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=16QzCD6BsKrx7XBtcXtc7wHV4sZqpok8L'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=10nrDiZZXdn45E2aHqDjCfRm9WYDBWtyR'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1hgRmHvVIuGFGKThctC9xKpPxE6UeIEVr'
    }
  ]
    
  const slides = data.map((item, index) => {
    return (
     <div className="slide">
       <video src={item.url} autoPlay muted loop />
    </div>
   )
  });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex)
    };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex) 
    };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
    }

          
return (
      <div>
        <div className='flex w-full bg-black relative group'>

          <div className="absolute group flex justify-between z-1 w-full h-full">
            <div className="h-full -translate-x-full text-neutral-900 group-hover:text-white group-hover:translate-x-0 flex items-center rounded-full p-2 transition-all ease-linear duration-300 hover:bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={nextSlide} className="h-8 w-8"  />
            </div>
            <div className="h-full translate-x-full text-neutral-900 group-hover:text-white group-hover:translate-x-0 flex items-center rounded-full p-2 transition-all ease-linear duration-300 hover:bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={prevSlide} className="h-8 w-8" />
            </div>
          </div>

            <div className="w-full rounded-2xl bg-black">
              <video src='https://drive.google.com/uc?export=view&id=1wSfqdrCyeTC7pY8IasAG3wVJ5JLVWN1t' controls autoPlay>Video not supported</video>
              {/* {slides[currentIndex]} */}
            </div>
        </div>

       <div className="flex w-full justify-between items-center">

          {/*right arrow*/}
          <div className="rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={nextSlide} size={30}/>
          </div>

          <div className="flex justify-center gap-2 py-4">
            {pics.map((pic, slideIndex) => (
              <div key={pic.url} onClick={() => goToSlide(slideIndex)} className="cursor-pointer">
               <img src={pic.url} alt="Jedi Survivor" className="rounded" />
              </div>
            ))}
            
          </div>

            {/*left arrow*/}
          <div className="rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={prevSlide} size={30}/>

          </div>
        </div>
      </div>
    );
  }
  
  export default MediaCarousel;

  // <div className="flex justify-center gap-2 py-4">
  // {slides.map((slide, slideIndex) => (
  //   <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="cursor-pointer">
  //     <img src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-g1a-07-1920x1080-320afddfd9ab.jpg?h=270&quality=medium&resize=1&w=480" alt="Jedi Survivor" className="rounded"/>
  //     {/* <img src={slides.url} /> */}
  //   </div>
  // ))}  //will need this snippet when routes running