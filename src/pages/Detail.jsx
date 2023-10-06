import React from "react";
import cover from "../assets/img/slider.jpg";
import coverY from "../assets/img/cover.jpg";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/fragments/Footer";

export const Detail = () => {
  return (
    <div className="m-0">
      <Header />

      <div className="flex items-center relative px-14 pt-6 bg-main">
        <img
          src={cover}
          alt=""
          className="w-full h-[90vh] object-cover rounded-xl brightness-50"
        />
        <div className="w-1/2 flex flex-col absolute px-12 py-4 text-white">
          <div className="-mt-6 text-4xl 2xl:text-5xl font-bold mb-2 2xl:mb-3">
            Doctor Strange : Multiverse of Madness
          </div>
          <div className="flex gap-4 text-sm 2xl:text-base font-medium mb-7">
            <div className="px-4 py-2 bg-gray-400/50 rounded-2xl">Action</div>
            <div className="px-4 py-2 bg-gray-400/50 rounded-2xl">
              Adventure
            </div>
            <div className="px-4 py-2 bg-gray-400/50 rounded-2xl">History</div>
          </div>
          <div className="flex gap-4 text-sm 2xl:text-base font-medium mb-1 2xl:mb-2">
            <div>19 Maret 2021</div>
            <div>|</div>
            <div>18+</div>
            <div>|</div>
            <div>4.9 / 5.0</div>
          </div>
          <div className="text-sm 2xl:text-base font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            similique suscipit vero molestias alias necessitatibus, maiores
            illum veritatis minima reiciendis ut quasi cumque dolorem autem
            atque sint quam fugit laboriosam!
          </div>
        </div>
      </div>

      <div className="px-14 pt-6 bg-main">
        <div className="flex gap-10 px-10 py-6 bg-white/20 backdrop-blur rounded-xl text-white">
          <img src={coverY} alt="" className="w-36 rounded" />
          <div className="flex flex-col gap-3 py-2 text-sm">
            <div className="flex"> 
              <div className="w-[110px]">Title</div>
              <div>: Doctor Strange</div>
            </div>
            <div className="flex"> 
              <div className="w-[110px]">Genre</div>
              <div>: Action, Comedy, Adventure</div>
            </div>
            <div className="flex"> 
              <div className="w-[110px]">Release date</div>
              <div>: 19 March 2023</div>
            </div>
            <div className="flex"> 
              <div className="w-[110px]">Rating</div>
              <div>: 4.9 / 5.0</div>
            </div>
            <div className="flex"> 
              <div className="w-[110px]">Description</div>
              <div className="w-3/5 ">: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed corrupti delectus itaque dolorum. Eum libero possimus, quisquam consectetur veritatis magni harum aspernatur alias eos. Alias temporibus excepturi cum, eos ipsam tenetur laboriosam minima molestiae animi repudiandae. Fugiat, tempore in.</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
