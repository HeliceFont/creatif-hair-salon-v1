import { GalleryStyles } from "./GalleryStyles";
import 'bootstrap/dist/css/bootstrap.min.css';
import biography_J from "../../assets/biography-j6.png";
import './sectionJ.css';
import biography_J2 from '../../assets/biography-j5.png'
import biography_J3 from '../../assets/biography-j3.png'
import CollectionsJ from "./CollectionsJ";
import { useEffect } from "react";

export const SectionJ = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
      <div className="section-2 fondo-section section__title">
        <hr className='hr-blurry' />
        <section className="sectionj__container">
          <article className="container__biography">

            <div className="biography__text ">
              <div className="section__title-description section__title ">
                <h1 className="montserrat-subrayada-regular">-Javier Cruzado-</h1>
                <hr className='hr-blurry' />
              </div>
              <h3 >
                <b>Nacido en la capital de Huelva,</b> Javi cruzado es un peluquero andaluz cuyo camino hacia la
                maestría en su oficio está marcado por una dedicación inigualable y una pasión por el arte del cabello.
                <br />
                Desde su infancia, <b>Javi mostraba un interés notable por la moda,</b> visitando regularmente la peluquería para estar al día con los últimos cortes de cabello.
                Su deseo de <b>perfeccionar su estilo</b> lo llevó a tomar las riendas de su propio cabello,
                adquiriendo una máquina para experimentar por sí mismo.
                Su determinación y habilidades autodidactas  lo llevaron a
                <b> desarrollar un talento innato </b> para el arte del corte de cabello.
              </h3>
            </div>
            <div className="biography__img">
              <img src={biography_J3} alt="javier cruzado" />
            </div>
          </article>



          <article className="container__biography">

            <div className="biography__text">
              <div className="section__title-description section__title">
                <h1 className="montserrat-subrayada-regular">-Carrera Profesional-</h1>
                <hr className='hr-blurry' />
              </div>
              <h3>
                A los 18 años, el destino intervino cuando su habilidad llamó la atención de un barbero profesional, quien lo alentó a considerar <b> una carrera en la industria de la peluquería. </b>
                <hr className='hr-blurry' />
                Decidido a ampliar sus horizontes y fortalecer sus habilidades, Javi se sumergió en el mundo de la barbería,
                donde recibió una formación formal y colaboró con expertos reconocidos en el campo, incluidos <b> nombres destacados como Paco López, Vishal Baharani, Mar Fonseca y Carmelo Tortosa.</b>
                <hr className='hr-blurry' />
                Su pasión por compartir sus conocimientos lo llevó a convertirse en <b> formador en una academia local, </b> donde no solo enseñaba, sino que también <b> continuaba aprendiendo y perfeccionando su oficio. </b>
                Esta experiencia no solo le brindó una valiosa red de contactos en la industria, sino que también lo llevó a descubrir su pasión por la enseñanza.

              </h3>
            </div>
            <div className="biography__img">
              <img src={biography_J2} alt="javier cruzado" />
            </div>
          </article>



          <article className="container__biography">


            <div className="biography__text">
              <div className="section__title-description section__title">
                <h1 className="montserrat-subrayada-regular">-Un Paso Adelante-</h1>
                <hr className='hr-blurry' />
              </div>
              <h3>
                <b> En 2019, junto con su pareja, </b> decidió dar un paso audaz y abrir su propia peluquería.
                Sin embargo, su determinación fue puesta a prueba cuando la pandemia de COVID-19 retrasó significativamente sus planes.
                A pesar de los desafíos, Javi continuó comprometido con su oficio y su enseñanza, adaptándose a las circunstancias cambiantes.
                <hr className='hr-blurry' />
                Actualmente, Javi forma parte del distinguido <b> equipo de formadores de Panasonic for Professionals, </b>
                donde comparte sus  vastos conocimientos y experiencia con peluqueros y barberos de toda Espana, consolidando así su posición como una
                <b> figura influyente en la industria de la peluquería a nivel nacional. </b>
                También ha colaborado con diferentes marcas de productos y actualmente es <b> embajador de skullmen. </b>
              </h3>
            </div>
            <div className="biography__img">
              <img src={biography_J} alt="javier cruzado" />
            </div>
          </article>
          <div className="section__title-description section__title">
                <h1 className="montserrat-subrayada-regular">-COLLECTIONS-</h1>
                <hr className='hr-blurry' />
              </div>
        </section>
        
      </div>
      <CollectionsJ/>
    </div>
  )
}
