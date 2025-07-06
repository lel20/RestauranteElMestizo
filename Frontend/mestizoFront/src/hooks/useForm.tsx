import { useState } from "react";

export const useForm = <T,>(valores_iniciales: T) => {
  const [datos, setDatos] = useState<T>(valores_iniciales);
  const handleOnchage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDatos((valores) => ({ ...valores, [name]: value }));
  };
  const resetForm = () => {
    setDatos(valores_iniciales);
  };
  return { datos, handleOnchage, resetForm };
};
