import Carne from "../assets/carne.png";
export const CardMenus = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <img className="w-[35rem] h-auto" src={Carne} alt="" />
      <div className="w-full my-8">
        <div className="w-full flex flex-col px-4 my-4 gap-y-4">
          <h2 className="text-4xl font-semibold">Arepa Rrellena</h2>
          <p className=" text-black/60 text-[1.2rem] font-medium">
            Harina de maíz asada rrellena de carne de ternera, pollo, chorizo o
            chicharron (trozos de carne frita)
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="flex justify-center items-center rounded-xl bg-black/90 text-white w-[9rem] h-[8rem] text-4xl font-bold">
            3,50 €
          </h1>
        </div>
      </div>
    </div>
  );
};
