import { useEffect, useState } from 'react';
import { ContactEmailjs } from './ContactEmailjs';

export const Contact = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIframeLoaded(true);
        }, 500);

        return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que termine
    }, []);

    return (


        <div className='contact'>
            <ContactEmailjs/>

            <div className="contact__map" id="load-iframe-map">
                {!iframeLoaded ? (
                    <span className="loader"></span>
                ) : (
                    <iframe
                        className="contact__iframe"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.464786552851!2d-6.934191923580037!3d37.260404141622175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d153f6e24315%3A0x5a875f3e098d578a!2sCreatif%20hair%20salon!5e0!3m2!1ses!2ses!4v1716768064066!5m2!1ses!2ses"
                    ></iframe>
                )}
            </div>

            
        </div>

    );
};

