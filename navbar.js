import React from 'react';  
import { Link } from 'react-router-dom';  

const Navbar = () => {  
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">  
            <a className="navbar-brand" href="#">Condomínio</a>  
            <div className="collapse navbar-collapse">  
                <ul className="navbar-nav">  
                    <li className="nav-item">  
                        <Link className="nav-link" to="/cadastro-moradores">Cadastrar Moradores</Link>  
                    </li>  
                    <li className="nav-item">  
                        <Link className="nav-link" to="/registro-autorizados">Registro Autorizados</Link>  
                    </li>  
                    <li className="nav-item">  
                        <Link className="nav-link" to="/registro-prestadores">Registro de Prestadores</Link>  
                    </li>  
                    <li className="nav-item">  
                        <Link className="nav-link" to="/agendamentos">Agendamentos</Link>  
                    </li>  
                    <li className="nav-item">  
                        <Link className="nav-link" to="/registro-visitantes">Registro de Visitantes</Link>  
                    </li>  
                    <li className="nav-item">  
                        <Link className="nav-link" to="/saida-chaves">Saída de Chaves</Link>  
                    </li>  
                </ul>  
            </div>  
        </nav>  
    );  
}  

export default Navbar;