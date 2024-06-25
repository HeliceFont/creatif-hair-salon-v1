
import './App.css';
import'./responsive.css'
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MisRutas } from './router/MisRutas'



function App() {
  let previousTitle = document.title

  window.addEventListener('blur', () =>{
    previousTitle = document.title
    document.title = '🚨¡No te vayas! ¡vueleve! 🚨'
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
