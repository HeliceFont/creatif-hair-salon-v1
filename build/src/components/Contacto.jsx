import GoogleCalendar from "./GoogleCalendar"
import { ContactEmailjs } from "./sections/ContactEmailjs"
import { ContactForm } from "./sections/ContactForm"


export const Contacto = () => {
  return (
    <div>
      <h1 className="montserrat-subrayada-regular">Contacto</h1>
      
      <GoogleCalendar/>
      
    </div>
  )
}
