import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    const [categoriasDesplegado, setCategoriasDesplegado] = useState(false);

    const toggleCategorias = () => {
        setCategoriasDesplegado(!categoriasDesplegado);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">EleganciaVaronil</a>
            </div>
            <div className="container" style={{ marginRight: 80 }}>
                <button className="btn btn-outline-success">Contactos</button>
                <button className="btn btn-outline-success">Politica de cambio</button>
                <button className="btn btn-outline-success">Guia de talles</button>
                <div className="dropdown">
                    <button className="btn btn-outline-success dropdown-toggle" onClick={toggleCategorias}>
                        Categorias
                    </button>
                    <div className={`dropdown-menu  bg-dark ${categoriasDesplegado ? 'show' : ''}`}>
                        <li><NavLink to={"/category/Boxer"} className="btn btn-outline-success">Boxer</NavLink></li>
                        <li><NavLink to={"/category/Pack"}  className="btn btn-outline-success">Pack</NavLink></li>
                    </div>
                    <CartWidget />

                </div>
            </div>
        </nav>
    )
};

export default NavBar;