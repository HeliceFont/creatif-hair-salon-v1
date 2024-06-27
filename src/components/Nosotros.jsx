import { Description } from "./sections/Description.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { SectionJ } from "./sections/SectionJ.jsx";
import { useEffect } from "react";




export const Nosotros = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
    return (
        <>
            
            <Description/>
            <SectionJ/>
            
        </>
    )
}
