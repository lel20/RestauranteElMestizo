import { NavLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
const imagenes = [
  "/src/assets/Restaurante1.jpg",
  "/src/assets/Restaurante2.jpg",
  "/src/assets/Restaurante3.jpg",
  "/src/assets/Restaurante4.jpg",
];
export const Hero = () => {
  return (
    <section className="h-screen relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        speed={3000}
        loop={true}
        className="h-full w-full"
      >
        {imagenes.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className=" relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/70 items-center  pointer-events-none z-0"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="continer mx-auto absolute flex flex-col justify-center items-center pointer-events-none gap-4 inset-0 z-10">
        <h1 className="leading-none text-gray-300 text-[clamp(4rem,10vw,9rem)] px-2 py-0 text-center  rounded font-playfair">
          El mestizo
        </h1>
        <p className=" text-orange-500 text-[clamp(0.5rem,5vw,2rem)] text-center">
          Bar - Restaurante
        </p>
        <NavLink
          to="/carta"
          className=" text-white  w-40 h-10 flex justify-center transform hover:-translate-y-1 items-center border-amber-300 border-1 
              cursor-pointer pointer-events-auto hover:bg-amber-500 transition duration-700 "
        >
          Carta
        </NavLink>
      </div>
    </section>
  );
};
