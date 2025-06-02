import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const imagenes = [
  "/src/assets/Restaurante1.jpg",
  "/src/assets/Restaurante2.jpg",
  "/src/assets/Restaurante3.jpg",
  "/src/assets/Restaurante4.jpg",
];
export const Inicio = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="h-screen relative">
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
                className=" relative h-full w-full bg-cover bg-center bg-z"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50 items-center  pointer-events-none "></div>
              </div>
            </SwiperSlide>
          ))}
          <div className="conatiner mx-auto absolute flex flex-col justify-center items-center  inset-0 z-10">
            <h1 className="text-white text-4xl font-bold px-4 py-2 rounded">
              El mestizo
            </h1>
            <p className="text-orange-500">Bar - Restaurante</p>
          </div>
        </Swiper>
      </div>
      <div>hola</div>
    </div>
  );
};
