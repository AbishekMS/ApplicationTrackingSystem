import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./slideshow.css";

export default function Slideshow() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
         url: "https://c0.wallpaperflare.com/preview/550/455/764/adults-analysis-banking-brainstorming.jpg",
      },
      {
         url:"https://c1.wallpaperflare.com/preview/645/791/767/agency-business-business-man-ceo.jpg",
      },
      {
         url: "https://c0.wallpaperflare.com/preview/128/229/315/entrepreneurs-accounting-analyzing-opposite.jpg",
      },
      
      {
         url: "https://c0.wallpaperflare.com/preview/299/73/133/agenda-analysis-business-plan-businessman.jpg",
      },
      {
         url: "https://wallpaperaccess.com/full/8912942.jpg",
      },
  ];

  return (
    <div className="slideshow-container">
      <SimpleImageSlider
        width={1500}
        height={600}
        images={sliderImages}
        autoPlay={true}
        onStartSlide={(index) => {
          setImageNum(index);
        }}
        autoPlayDelay={2}
      />
      <div className="slideshow-bullets">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`slideshow-bullet ${index === imageNum ? "active" : ""}`}
            onClick={() => setImageNum(index)}
          ></div>
        ))}
      </div>
      <div className="slideshow-navs">
        <div
          className="slideshow-nav"
          onClick={() => setImageNum((imageNum - 1 + sliderImages.length) % sliderImages.length)}
        >
          {"<"}
        </div>
        <div
          className="slideshow-nav"
          onClick={() => setImageNum((imageNum + 1) % sliderImages.length)}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}


