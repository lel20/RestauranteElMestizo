import { useState } from "react";

export const useForm = <T,>(valores_Iniciales: T) => {
  const [datos, setDatos] = useState<T>(valores_Iniciales);
  const handleOnchage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDatos((valores) => ({ ...valores, [name]: value }));
  };
  const resetForm = () => {
    setDatos(valores_Iniciales);
  };
  return { datos, handleOnchage, resetForm };
};
