import React from "react";

export default function DetailSong() {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now Playing</h2>
      <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
      <div className="w-[200px] m-auto mt-10">
        <img
          className="w-full"
          src="https://lucdia2.vn/loi-dich-sing-me-to-sleep/imager_37614.jpg"
          alt="avatar"
        />
      </div>
      <div className="flex justify-evenly items-center mt-10 ">
        <img
          className="w-[50px] rounded-full"
          src="https://lucdia2.vn/loi-dich-sing-me-to-sleep/imager_37614.jpg"
          alt="avatar"
        />
        <span className="text-xl text-white">Alan Walker</span>
      </div>
    </div>
  );
}
