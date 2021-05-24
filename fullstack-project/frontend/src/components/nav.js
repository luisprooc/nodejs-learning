import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import {SearchIcon} from './icons/icons.js';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [name, setName] = useState('');

    const handlerMenu = () => setOpenMenu(!openMenu);
    
    const handlerInput = (e) => setName(e.target.value);

    return( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">SOFTWARE</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarColor03" 
                    aria-controls="navbarColor03" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={handlerMenu}
                >
                <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link className="nav-link active" to="/">Home
                    <span className="visually-hidden">(current)</span>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/api/technologies">Technologies</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="Search" onChange={handlerInput}/>
                <Link className="btn btn-secondary my-2 my-sm-0" to={`/api/technology/search/${name}`}><SearchIcon /></Link>
            </form>
            </div>
        </div>
    </nav>
    )
};

export default Nav;