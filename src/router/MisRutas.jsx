
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
    <BrowserRouter basename="/creatif-hair-salon-v1/">
        {/* HEADER Y NAVEGACION */}
        <HeaderNav/>

        {/* CONTENIDO CENTRAL */}
        <section className="content">
          <Routes >
              <Route path="/" element={<Navigate to="/inicio"/>}/>
              <Route path="/inicio" element={<Inicio/>}/>
              <Route path="/portafolio" element={<Portafolio/>}/>
              <Route path="/nosotros" element={<Nosotros/>}/>
              <Route path="/Servicios" element={<Servicios/>}/>
              <Route path="/Collections" element={<Collections/>}/>
              <Route path="/sectionj" element={<SectionJ/>}/>
          </Routes>
        </section>
        
        
        {/* FOOTER */}
        <Footer/>
    </BrowserRouter>
</div>
  )
}
