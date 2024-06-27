
import { GalleryStyles } from "./sections/GalleryStyles"
import '../components/effects/effectSmoke.css';
import smoke_section from '../assets/Contemporary-collection1.mp4'
import CollectionsJ from "./sections/CollectionsJ";
import { useEffect } from "react";



export const Collections = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
    return (
        
        <div>
            <CollectionsJ/>
        </div>
        
    )
}
