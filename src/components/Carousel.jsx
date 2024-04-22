import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Carousel({ city }) {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(slide === city.slides.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? city.slides.length - 1 : slide - 1);
  }

  return (
    <>
      <div className="carousel">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {city.slides?.map((imageSource, index) => (
          <img
            src={imageSource}
            className={slide === index ? "slide" : "slide slide-hidden"}
            alt={`Image of ${city.name}`}
            key={index}
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {city.slides?.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          ))}
        </span>
      </div>
    </>
  );
}

export default Carousel;
