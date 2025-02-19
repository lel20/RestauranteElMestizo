export interface Racion {
  nombre: string;
  precio: number | string;
  imagen: string;
  disponibilidad: string;
  // Define más propiedades según la estructura de tu respuesta JSON
}
export interface Atributos {
  nombre: string;
  precio: number;
  imagen: string;
  descripcion:string
  disponibilidad: string;
  nota: string;
}
export interface ItemsMenu{
  titulo:string;
  url:string;
  submenu?:{
    titulo:string;
    url:string
  }[],
  
}

export interface ItemsProps {
  itemsMenu: ItemsMenu;
  closeMenu?:()=>void
}
export interface Submenu{
  titulo:string
  url:string
}