import React from "react";
import { Button } from "../elements/Button";
import { Carousel } from "@material-tailwind/react";
import slider from '../../assets/img/slider.jpg'

export const Hero = () => {
  return (
    <Carousel
      className="text-white bg-main"
      prevArrow={false}
      nextArrow={false}
      loop={true}
      autoplay={true}
      autoplayDelay={5100}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="flex items-center gap-4 px-14 h-[75vh] my-auto">
        <div className="w-1/2">
          <div className="font-bold text-5xl mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel.
          </div>
          <div className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            perspiciatis obcaecati sit.
          </div>
          <Button
            text="Watch Trailer"
            textColor="text-secondary"
            textHover="hover:text-white"
            bgColor="bg-main"
            width="w-32"
            bgHover="hover:bg-secondary"
          />
        </div>
        <img
          src={slider}
          alt=""
          className="w-1/2 object-cover rounded shadow-lg shadow-gray-600"
        />
      </div>
      <div className="flex items-center gap-4 px-14 h-[75vh] my-auto">
        <div className="w-1/2">
          <div className="font-bold text-5xl mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel.
          </div>
          <div className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            perspiciatis obcaecati sit.
          </div>
          <Button
            text="Watch Trailer"
            textColor="text-secondary"
            textHover="hover:text-white"
            bgColor="bg-main"
            width="w-32"
            bgHover="hover:bg-secondary"
          />
        </div>
        <img
          src={slider}
          alt=""
          className="w-1/2 object-cover rounded shadow-lg shadow-gray-600"
        />
      </div>
      <div className="flex items-center gap-4 px-14 h-[75vh] my-auto">
        <div className="w-1/2">
          <div className="font-bold text-5xl mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel.
          </div>
          <div className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            perspiciatis obcaecati sit.
          </div>
          <Button
            text="Watch Trailer"
            textColor="text-secondary"
            textHover="hover:text-white"
            bgColor="bg-main"
            width="w-32"
            bgHover="hover:bg-secondary"
          />
        </div>
        <img
          src={slider}
          alt=""
          className="w-1/2 object-cover rounded shadow-lg shadow-gray-600"
        />
      </div>
    </Carousel>
  );
};
