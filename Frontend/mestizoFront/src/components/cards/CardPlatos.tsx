type Props = {
  nombre: string;
  imagen: string;
  url: string;
};
export const CardPlatos = ({ nombre, imagen, url }: Props) => {
  return (
    <a
      href={url}
      className="w-full h-60 group transition-all duration-500 hover:scale-90"
    >
      <div
        className="relative  w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="absolute bg-black/70 group-hover:bg-black/40  inset-0 w-full h-full"></div>
        <h2 className="absolute flex justify-center w-full h-full items-center text-amber-50 z-10">
          {nombre}
        </h2>
      </div>
    </a>
  );
};
