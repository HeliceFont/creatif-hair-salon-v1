import gallery_j1 from "../../assets/javi-corte5.jpg";
import gallery_j2 from "../../assets/contemporary-men-collection-bw.mp4";
import gallery_j3 from "../../assets/javi-corte5.jpg";
import gallery_j4 from "../../assets/IMG-20240513-WA0008.jpg";
import gallery_j5 from "../../assets/javi-corte5.jpg";
import gallery_j6 from "../../assets/contemporary-men-collection-color.mp4";
import gallery_j7 from "../../assets/javi-C1.jpg";
import gallery_j8 from "../../assets/corte-javi2.png"
import smoke_section from '../../assets/Contemporary-collection1.mp4'
import section_form from '../../assets/FORMACIONES.mp4'
import gallery_jF from '../../assets/2024-javi.mp4'
import gallery_jF0 from '../../assets/formacion-1.jpg'
import gallery_jF1 from '../../assets/formacion-video.mp4'
import gallery_jF2 from '../../assets/formacion-2.jpg'
import gallery_jF3 from '../../assets/formacion-video2.mp4'



// IMG-20240513-WA0006.jpg
export const GalleryStyles = () => {
    return (
        <div>
            <section className="section__collections">
                <video src={smoke_section} muted loop controls>
                    
                </video>


                <h1 className='libre-bodoni'>
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                    <span>E</span>
                    <span>M</span>
                    <span>P</span>
                    <span>O</span>
                    <span>R</span>
                    <span>A</span>
                    <span>R</span>
                    <span>Y</span>
                </h1>
                <h2 className='libre-bodoni-h2'>
                    <span>M</span>
                    <span>E</span>
                    <span>N</span>
                    <span>-</span>
                    <span>C</span>
                    <span>O</span>
                    <span>L</span>
                    <span>L</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                </h2>

            </section>
            <div className="gallery__contain">
                {/* Gallery CONTEMPORARY */}
                <div className="row row__position">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={gallery_j1}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <video
                            src={gallery_j6}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            
                            muted
                            
                            controls
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <video
                            src={gallery_j2}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                            
                            muted
                            
                            controls
                        />

                        <img
                            src={gallery_j8}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={gallery_j7}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                            
                        />

                        <video
                            src={gallery_j6}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                            
                            muted
                            
                            controls
                        />
                    </div>
                </div>
            </div>

            <section className="section__collections">
                <video src={section_form}  muted loop controls></video>


                <h1 className='libre-bodoni'>
                    <span>F</span>
                    <span>O</span>
                    <span>R</span>
                    <span>M</span>
                    <span>A</span>
                    <span>C</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                    <span>E</span>
                    <span>S</span>
                </h1>
            </section>
            <div className="gallery__contain">
                {/* Gallery FORMACIONES */}
                <div className="row row__position">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">


                        <img
                            src={gallery_jF0}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <video
                            src={gallery_jF}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            
                            muted
                            
                            controls
                        />

                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <video
                            src={gallery_jF1}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                            
                            muted
                            
                            controls
                        />

                        <video
                            src={gallery_jF3}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                            
                            muted
                            
                            controls
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={gallery_jF2}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                            
                        />

                        <video
                            src={gallery_j6}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                            
                            muted
                            
                            controls
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


