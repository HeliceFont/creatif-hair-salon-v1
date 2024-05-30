import { Link } from "react-router-dom"
import { useEffect } from 'react'
import logo2 from '../assets/dibujo-a.svg';
import javi from '../assets/javi-C1.jpg';
import rocio from '../assets/rocio-pink2.jpg';


import 'animate.css';
import { Description } from "../components/sections/Description.jsx"
import { Reseñas } from "./sections/Reseñas.jsx";





export const Inicio = () => {


  useEffect(() => {
    const texto = document.querySelector(".texto-dinamico");

    texto.addEventListener("click", function () {
      texto.style.animation = "none";
      void texto.offsetWidth;
      texto.style.animation = "moverTexto 2s forwards";
    });
    return () => {
      texto.removeEventListener("click", function () {
        texto.style.animation = "none";
        void texto.offsetWidth;
        texto.style.animation = "moverTexto 2s forwards";
      });
    }
  },);

  return (


    <div>
      <header className="header-inicio">

        <div className="barra-lateral">
          <div className="texto-dinamico">CREATIF HAIR SALON - CREATIF HAIR SALON - CREATIF HAIR SALON - CREATIF HAIR SALON - CREATIF HAIR SALON - CREATIF HAIR SALON - CREATIF HAIR SALON - CREATIF HAIR SALON</div>
        </div>

        <div className="logo-inicio animate__animated animate__rollIn">

          <img src={logo2} alt="" />
        </div>

        <div className="tarjeta animate__animated animate__bounce montserrat-card ">
          <h1>
            Estilistas Peluqueros Creativos 
            <hr/>
             Cortes Tendencias.
          </h1>
        </div>

        <Link to="/servicios" >
          <button type='button' className='description__btn btn-secondary montserrat-card' data-bs-toggle="tooltip" data-bs-placement="top" title="Ver más sobre Nosotros">
            Pedir Cita
          </button>
        </Link>
      </header>

      {/* Nosotros */}
      <section className="section-2 fondo-section section__title">
        <div className=' section__title-description montserrat-subrayada-regular '>
          <h1>-Nosotros-</h1>
          
        </div>
        <div className="section__description">

          <article className="description__container-img">
            <div>
              <h1>
                <a href="#" className="description__name montserrat-subrayada-regular ">Rocio Pink</a>
              </h1>
            </div>
            <div className="description__link">
              <img src={rocio} alt="Rocio Pink" className='description__img img-fluid'></img>
            </div>


            <div className='description__card card-1 montserrat-card'>
              <p className="#">

                En nuestro salón, ofrecemos una experiencia única en  el <b>cuidado y estilo capilar.</b>
                Somos un equipo apasionado compuesto por dos estilistas excepcionales.
                Estamos siempre actualizados con las <b> últimas técnicas y estilos</b> para asegurarnos de que siempre recibas un servicio de alta calidad que esté a la vanguardia de la moda.
              </p>

            </div>
            <Link to="/nosotros">
              <button type='button' className='description__btn btn-secondary montserrat-card' data-bs-toggle="tooltip" data-bs-placement="top" title="Ver más sobre Nosotros">
                Ver más
              </button>
            </Link>

          </article>

          <article className="description__container-img">
            <div>
              <h1>
                <a href="#" className="description__name  name__titl-j montserrat-subrayada-regular ">Javi Cruzado</a>
              </h1>
            </div>
            <div className="description__link">
              <img src={javi} alt="javi cruzado" className='description__img img-fluid'></img>
            </div>


            <div className='description__card card-1 montserrat-card'>
              <p className="">
                Juntos, combinamos nuestra <b> creatividad, habilidades y experiencia</b> para brindarte cortes y estilos que reflejen tu personalidad y resalten tu belleza natural.
                Con una especialización en <b> rubios deslumbrantes y colores fantasía vibrantes </b>
                expertos en crear looks únicos y llamativos que te harán destacar entre la multitud.
              </p>
            </div>
            <Link to="/sectionj">
              <button type='button' className='description__btn btn-secondary montserrat-card' data-bs-toggle="tooltip" data-bs-placement="top" title="Ver más sobre Nosotros">
                Ver más
              </button>
            </Link>
          </article>
        </div>
      </section>
      <Description />
      <Reseñas/>
    </div>
  )
}

