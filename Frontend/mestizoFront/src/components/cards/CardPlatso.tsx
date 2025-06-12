type Props = {
  nombre: string;
  imagen: string;
};
export const CardPlatos = ({ nombre, imagen }: Props) => {
  return (
    <div className="border border-black  w-full h-60">
      <div
        className="relative  bg-amber-200 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="absolute bg-black/70 inset-0 w-full h-full"></div>
        <h2 className="absolute flex justify-center w-full h-full items-center text-amber-50 z-10">
          {nombre}
        </h2>
      </div>
    </div>
  );
};
