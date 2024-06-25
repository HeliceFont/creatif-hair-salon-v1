import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
      <section className="layout__footer">
        <div className="footer__container">
          <section className="footer__top">
            <ul className="footer__social">
              <li className="social__item">
                <Link to='https://www.facebook.com/creatifhairsalon/?locale=es_LA' className="social__link">
                  <FontAwesomeIcon icon={faFacebookF} className="social__img" />
                </Link>
              </li>
              <li className="social__item">
                <Link to='https://www.instagram.com/javicruzado?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className="social__link">
                  <FontAwesomeIcon icon={faInstagram} className="social__img" />
                </Link>
              </li>
              <li className="social__item">
                <Link to='https://www.google.com/maps/dir//C.+Galaroza,+1,+21006+Huelva/@37.2603713,-7.014018,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd11d153f6e24315:0x5a875f3e098d578a!2m2!1d-6.931617!2d37.2603999?entry=ttu' className="social__link">
                  <FontAwesomeIcon icon={faLocationDot} className="social__img" />
                </Link>
              </li>
              
            </ul>
          </section>
          <section className="footer__main">
            <div className="footer__fleft">
              <div className="fleft__container">
                <h2 className="fleft__title">Contactanos!</h2>
                <p className="fleft__subtitle">
                  Es un hecho establecido hace demasiado tiempo que un lector
                  se distraerá con el contenido del texto de un sitio mientras que mira su diseño
                </p>

                <form action="" className="fleft__form">
                  <div className="fleft__group">
                    <span className="fleft__mail-icon">
                      <i className="fa-solid fa-envelope-open-text fleft__img"></i>
                    </span>

                    <input type="text" className="fleft__form-control" placeholder="correo Electrónico" />
                    <button type="submit" className="fleft__btn">Suscríbete</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="footer__fright">
              <div className="footer__widget footer__widget--50">
                <h6 className="widget__title">Servicios</h6>

                <ul className="widget__list">
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Horarios</Link>
                  </li>
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Productos</Link>
                  </li>
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Tienda</Link>
                  </li>
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Corte Señora</Link>
                  </li>
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Corte Caballero</Link>
                  </li>
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Agendar Cita</Link>
                  </li>
                </ul>
              </div>

              <div className="footer__widget footer__widget--25">
                <h6 className="widget__title">Recursos</h6>

                <ul className="widget__list">
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Blog</Link>
                  </li>
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Formación</Link>
                  </li>
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Galería</Link>
                  </li>
                  

                </ul>
              </div>

              <div className="footer__widget footer__widget--25">
                <h6 className="widget__title">Soporte</h6>

                <ul className="widget__list">
                  <li className="widget__item">
                    <Link href="#" className="widget__link">Contacto</Link>
                  </li>

                  <li className="widget__item">
                    <Link to='#' className="widget__link">Politica de privacidad</Link>
                  </li>

                  <li className="widget__item">
                    <Link href="#" className="widget__link">Términos de uso</Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="footer">
            <span>
              Creatif Hair Salon &copy; 2024 Todos los derechos reservados <Link to='https://helicexworkweb.es/' target="_blank" rel="noopener noreferrer">HelicexWorkweb&#174;</Link>
            </span>
          </footer>
        </div>
      </section>
    </div>
  );
}
