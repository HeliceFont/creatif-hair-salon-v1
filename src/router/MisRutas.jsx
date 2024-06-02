
import{ Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio } from "../components/inicio"
import { Portafolio } from "../components/Portafolio"
import { Nosotros } from "../components/Nosotros"
import { Servicios } from "../components/Servicios"
import { Contacto } from "../components/Contacto"
import { HeaderNav } from "../components/layout/HeaderNav"
import { Footer } from "../components/layout/Footer"
import { SectionJ } from "../components/sections/SectionJ"
import { Collections } from "../components/Collections"

export const MisRutas = () => {
  return (
    // IMPORTANTE tener instalado react-router-dom en el proyecto para que nuestras rutas funcionen correctamente
<div>
    <BrowserRouter basename="">
        {/* HEADER Y NAVEGACION */}
        <HeaderNav/>

        {/* CONTENIDO CENTRAL */}
        <section className="content">
          <Routes >
              <Route path="/" element={<Navigate to="/creatif-hair-salon-v1/inicio"/>}/>
              <Route path="/creatif-hair-salon-v1/inicio" element={<Inicio/>}/>
              <Route path="/creatif-hair-salon-v1/portafolio" element={<Portafolio/>}/>
              <Route path="/creatif-hair-salon-v1/nosotros" element={<Nosotros/>}/>
              <Route path="/creatif-hair-salon-v1/Servicios" element={<Servicios/>}/>
              <Route path="/creatif-hair-salon-v1/Collections" element={<Collections/>}/>
              <Route path="/creatif-hair-salon-v1/sectionj" element={<SectionJ/>}/>
          </Routes>
        </section>
        
        
        {/* FOOTER */}
        <Footer/>
    </BrowserRouter>
</div>
  )
}
