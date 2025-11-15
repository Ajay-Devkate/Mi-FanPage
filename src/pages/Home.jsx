import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { trophies } from "../model/trophie";
import { news } from "../model/news";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full">
        <div className="h-svh sm:bg-[url('https://res.cloudinary.com/dp8umj9cw/image/upload/team_imgupscaler.ai_V1_Fast__2K_uxonfa.png')] bg-[url('https://res.cloudinary.com/dp8umj9cw/image/upload/hero_img_for_mobile_ldzfie.jpg')] bg-cover bg-center flex flex-col">
          <div className="mt-18 absolute sm:inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="sm:pb-20 pb-10 h-full flex flex-col items-center sm:px-40 px-10 text-justify justify-end z-1 ">
            <h1 className="text-4xl sm:text-gray-100 text-white text-center">
              “Duniya Hila Denge Hum...”
            </h1>
            <p className="sm:text-gray-100 text-white">
              The Mumbai Indians are a professional Twenty20 cricket team based
              in Mumbai, Maharashtra, that competes in the Indian Premier League
              and WPL. The Indians were founded in 2008 and are owned by India's
              largest conglomerate, Reliance Industries, through its wholly
              owned subsidiary, Indiawin Sports
            </p>
          </div>
        </div>
        <div className="h-full flex gap-10 flex-col bg-[#001746] text-white sm:px-50 px-14 sm:py-14 py-10">
          {trophies.map((data, i) => (
            <div className="sm:flex sm:justify-between justify-items-center border-b border-gray-600 sm:pb-6 pb-4">
              <img
                className="w-20 rounded-full sm:ml-12"
                src={data.img}
                alt={`Trophie img ${i}`}
              />
              <div className="sm:w-120 sm:h-20 text-center pb-4">
                <p className="font-bold sm:text-start text-xl pt-2">
                  {data.year}
                </p>
                <h1 className="sm:text-start">{data.desc}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="h-full  bg-gray-200 text-white sm:px-50 px-14 sm:py-6 py-2">
          <h1 className="text-[#001746] text-center pb-8 font-semibold text-3xl pt-6">
            Latests News
          </h1>
          <div className="gap-10 grid sm:grid-cols-3 grid-cols-1">
            {news.map((data, id) => (
              <img className="w-80" src={data} alt={`News Img ${id}`} />
            ))}
          </div>
        </div>

        <div className="h-full  bg-gray-200 text-white sm:px-50 px-14 sm:py-8 py-6 pb-8">
          <h1 className="text-[#001746] text-center pb-4 font-semibold text-3xl">
            Final Winning Moments
          </h1>
          <div className="w-full flex sm:flex-row flex-col gap-8 justify-center mt-6">
            <iframe
              className="w-full sm:w-[600px] h-[300px] sm:h-[350px] rounded-xl"
              src="https://www.youtube.com/embed/MmmYhtkSHYI?si=M_DpSgx80TBh2qyp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full sm:w-[600px] h-[300px] sm:h-[350px] rounded-xl"
              src="https://www.youtube.com/embed/5bgqucZ7CUg?si=KBOelalzSEV9TgkR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
