

import header_salon1 from '../../assets/salon_3-1.png';
import header_salon2 from '../../assets/salon_2-1.png';
import header_salon3 from '../../assets/salon_1-1.png';
import logo2 from '../../assets/dibujo-b.svg';
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { GalleryStyles } from './GalleryStyles';



export const Description = () => {
    return (
        <>
        

            <section className="section-2 fondo-section section__title">

                {/* Carousel */}
                <Carousel fade className="carousel-header custom-carousel">
                    <Carousel.Item>
                        <img src={header_salon2} className="d-block w-100 h" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={header_salon1} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={header_salon3} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
                {/* Nuestro salón */}
                <div className='section__title-description'>
                    <h1 className="montserrat-subrayada-regular">-Nuestro Salón-</h1>
                    
                </div>

                <div className='description__card card-1-p montserrat-card'>
                    <p className="">
                        En <b> &nbsp;Creatif Hair Salon Javi Cruzado y Rocío </b>&nbsp; tenemos <b> &nbsp;más de 10 años de experiencia</b> en el mundo del estilismo para ofrecer un servicio excepcional a sus clientes. 
                        {/* <hr className='hr-blurry'/> */}
                        <br /> 
                        Este salón de estilistas cualificados, ubicado en Huelva, ha sido galardonado como una de las &nbsp; <b> 50 barberías más influyentes de España por la revista SOYBARBUDO en 2024, </b>&nbsp;  y ha recibido la prestigiosa &nbsp;<b>placa de Q HAIR Quality SALONS OF THE WORLD en 2023.</b> 
                        <br />
                        
                        Con una amplia gama de servicios que incluyen cortes, tintes, peinados y más, Creatif Hair Salon se enorgullece de ofrecer <b>una experiencia de estilismo personalizada y de alta calidad.</b> 
                        <br />
                        <b>Colaborando con marcas reconocidas como Panasonic y Skull Men</b> Javi y Rocío continúan estableciendo estándares de excelencia en la industria del estilismo, creando looks que reflejan la individualidad y el estilo de cada cliente.
                    </p>
                    
                </div>
                
            </section>
            
            
        </>
    )
}
