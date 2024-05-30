import { NavLink } from "react-router-dom"
import '../../App.css'
import '../effects/headerServices.css'
import logo from "../../assets/Logo-c1-a.svg"
import { useState } from "react";
import './customStyles.css';

export const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>

            {/* HEADER NAV RESPONSIVE */}
            <header className="header sticky-header">

                <nav className="nav-container">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {toggleMenu && menuOpen ? '✖' : '☰'} {/* Ícono de hamburguesa */}
                    </button>
                    <ul className={`nav-links ${menuOpen ? 'open' : 'closed'}`}>
                        <li>
                            <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros">Nosotros</NavLink>
                        </li>
                        <li>
                            <div className="logo">
                                <NavLink to="/inicio">
                                    <img src={logo} alt="Logo" className="logo" />
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/servicios">Servicios</NavLink>
                        </li>
                        <li>
                            <NavLink to="/collections">Collections</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>


        </>
    )
}
