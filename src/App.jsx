
import './App.css';
import'./responsive.css'
import 'animate.css';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MisRutas } from './router/MisRutas'

// Inicializa Google Analytics 4 con tu ID de medición
ReactGA.initialize('G-S3J17D9SYN');

// Registra una página vista cuando la app carga
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

// Obtén el contenedor raíz
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Renderiza la aplicación
root.render(<App />);



function App() {
  let previousTitle = document.title

  window.addEventListener('blur', () =>{
    previousTitle = document.title
    document.title = '🚨💀¡No te vayas! ¡vueleve!💀🚨'
  })

  window.addEventListener('focus', () =>{
    document.title = 'Creatif Hair Salon'
  })

  return (
    <div className='layout'>
      <MisRutas/>
      

    </div>
  )
}

export default App
