import CarWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">EleganciaVaronil</a>
            </div>
            <div className="container">
                <button className="btn btn-outline-success">Contactos</button>
                <button className="btn btn-outline-success">Politica de cambio</button>
                <button className="btn btn-outline-success">Guia de talles</button>
            </div>
            <CarWidget />
        </nav>
    )
};

export default NavBar;