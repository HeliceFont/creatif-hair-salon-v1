import { useEffect } from 'react';

const ElfsightWidget = () => {
    useEffect(() => {
        // Crear un script de la plataforma Elfsight y añadirlo al documento
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.setAttribute('data-use-service-core', '');
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Limpiar el script cuando el componente se desmonte
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="elfsight-app-46b4d717-61ae-4c92-a607-b183851c0523" data-elfsight-app-lazy></div>
    );
};

export default ElfsightWidget;
