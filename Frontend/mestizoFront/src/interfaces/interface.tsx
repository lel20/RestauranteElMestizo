export interface Plato {
  id?: number;
  nombre: string;
  img: string;
  url: string;
}
export interface Racion {
  id: number;
  nombre: string;
  precio: number;
  disponibilidad: boolean;
}

export interface FormData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

// ----------------Interface de los platos ---------
export interface CartaPlatos {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  disponibilidad: boolean;
  fecha_creacion: string;
}
export interface SubmenuInterface {
  id: number;
  nombre: string;
  url: string;
}
