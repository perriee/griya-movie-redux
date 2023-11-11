import React from 'react';

export const ChallengeResponsive = () => {
  return (
    <div className="flex flex-col bg-slate-200 p-4 min-h-screen gap-4 w-full">
      <div className="flex justify-end">
        <div className="flex w-[30%] md:w-full lg:w-[100%] h-[10vh] bg-[#EB3838] text-3xl text-white font-semibold items-center justify-center">
          Merah
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:h-[84vh]">
        <div className="md:order-4 lg:order-2 lg:w-[40%]">
          <div className="flex w-full h-[20vh] lg:h-full bg-[#5C38EB] text-3xl text-white font-semibold items-center justify-center">
            Ungu
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:order-3 lg:w-full lg:h-full">
          <div className="flex gap-4 md:order-3 lg:w-[100%] lg:h-[50%]">
            <div className="flex md:order-2 bg-[#EB38AE] w-1/2 h-[15vh] lg:w-[50%] lg:h-full text-3xl text-white font-semibold items-center justify-center">
              Pink
            </div>
            <div className="flex md:order-1 md:bg-[#EB38AE] lg:bg-[#38C0EB] items-center justify-center bg-[#38C0EB] w-1/2 h-[15vh] lg:h-full text-3xl text-white font-semibold">
              Biru
            </div>
          </div>

          <div className="flex md:order-2 items-center justify-center bg-[#38EB55] h-[20vh] lg:w-full lg:h-[50%] text-3xl text-white font-semibold">
            Hijau
          </div>
        </div>
      </div>
    </div>
  );
};
