

import background_header from '../../assets/header-services-background.mp4';
import logo from '../../assets/dibujo-a.svg';

import './../effects/headerServices.css';

import { AccordionServices } from './AccordionServices';
import { Contact } from './Contact';

const HeaderServices = () => {
  return (
    <div>
      <header className="header-services">
        <section className="section-2 fondo-section section__title">
          <div className="video-container">
            <video src={background_header} muted loop autoPlay playsInline disablePictureInPicture />
            <img src={logo} className='header__services-img' alt="" />
          </div>
          
          <section className="services__description">
          
            <h1 className="services__title montserrat-subrayada-regular">-Servicios-</h1>
            {/* <hr className='hr-blurry' /> */}
          </section>
          <AccordionServices/>
          <div className='services__description'>
                <h1 className='services__title montserrat-subrayada-regular'>-Contacto-</h1>
                
            </div>
          <Contact/>
        </section>

      </header>

    </div>
  );
}

export default HeaderServices;

