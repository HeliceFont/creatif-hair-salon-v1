import { useEffect } from "react";
import HeaderServices from "./sections/HeaderServices"
import { Reseñas } from "./sections/Reseñas"


export const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
      <HeaderServices/>
      <Reseñas/>
    </div>
  )
}
