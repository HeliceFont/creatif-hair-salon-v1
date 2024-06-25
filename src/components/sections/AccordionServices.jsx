import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const AccordionServices = () => {
    return (
        <div>
            <div className="accordion accordion-flush accordion-custom" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>Corte Hombres</b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <h4>
                                    <li>
                                        <b>Corte Hombre (Niño)</b>  12€
                                        <p 
                                        data-bs-toggle="tooltip"
                                            data-bs-placement="bottom"
                                            title="El servicio de corte (asesoramiento) es para aquellas personas que buscan un corte totalmente personalizado basado en el visagismo (tipo de rostro, tipo de cabello, etc…) para más información póngase en contacto por teléfono, gracias!">
                                            15 minutos ¿Qué incluye?
                                        </p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657012%22%2C%22optionIds%22%3A%5B%221263415068%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <b>Corte Hombre <br />(Fade,solo degradado)</b> 13€
                                        <p>15 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657012%22%2C%22optionIds%22%3A%5B%221263196300%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <b>Corte Hombre (Corte hombre)</b> 15€
                                        <p>30 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657012%22%2C%22optionIds%22%3A%5B%221263196302%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <b>Corte Hombre (Corte + barba )</b> 20€
                                        <p>45 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657012%22%2C%22optionIds%22%3A%5B%221263280424%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <b>Corte Hombre (Asesoramiento )</b> 25€
                                        <p>45 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657012%22%2C%22optionIds%22%3A%5B%221263196301%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                </h4>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            <b>Barba</b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <h4>
                                    <li>
                                        <b>Barba (Repaso)</b>  10€
                                        <p>15 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657031%22%2C%22optionIds%22%3A%5B%221263182573%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <b>Barba (Diseño)</b> 15€
                                        <p>30 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657031%22%2C%22optionIds%22%3A%5B%221263182572%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <b>Ritual Afeitado </b> 30€
                                        <p>30 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657032%22%2C%22optionIds%22%3A%5B%221263182577%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                </h4>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <b>Mechas Y Decoloración</b>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <h4>
                                    <li>
                                        <b>Reflejos Hombre</b>  50€
                                        <p>45 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657045%22%2C%22optionIds%22%3A%5B%221263182595%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <b>Mechas Hombre</b> 80€
                                        <p>2h 30 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657046%22%2C%22optionIds%22%3A%5B%221263182596%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                    <hr />
                                    <li>
                                        <b>Decoloración Extrema</b> 120€
                                        <p>3h 30 minutos ¿Qué incluye?</p>
                                        <button className='custom-button'>
                                            <Link className='custom-link' to='https://widget.treatwell.es/availability?venueId=100063434&proposedServices=%5B%7B%22menuItemId%22%3A%22TR1360657048%22%2C%22optionIds%22%3A%5B%221263182599%22%5D%7D%5D' target="_blank" rel="noopener noreferrer"> <b>Seleccionar</b> </Link>
                                        </button>
                                    </li>
                                </h4>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
