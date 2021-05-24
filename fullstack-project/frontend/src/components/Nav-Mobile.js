import React from 'react';
import './styles/nav-mobile.css';
import {Link} from 'react-router-dom';
import { CloseIcon, SearchIcon } from './Icons';
import Zoom from 'react-reveal/Zoom';

const NavMobile = ({setOpenMenu, handlerInput, name}) => {
    return(
        <Zoom>

        <div className='nav-mobile navbar-light bg-light'>
            <span className="nav-mobile-btn" onClick={() => setOpenMenu(false)}><CloseIcon /></span>
            <div className="py-5 mt-3 px-4">
                <form className="d-flex justify-content-center">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" onChange={handlerInput}/>
                    <Link className="p-2" to={`/api/technology/search/${name}`} onClick={() => setOpenMenu(false)}><SearchIcon /></Link>
                </form>
                <ul className="navbar-nav me-auto text-center py-5">
                    <li className="nav-item" onClick={() => setOpenMenu(false)}>
                    <Link className="nav-link active" to="/">Home
                        <span className="visually-hidden">(current)</span>
                    </Link>
                    </li>
                    <li className="nav-item" onClick={() => setOpenMenu(false)}>
                    <Link className="nav-link" to="/api/technologies">Technologies</Link>
                    </li>
                    <li className="nav-item" onClick={() => setOpenMenu(false)}>
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    
                </ul>

            </div>
        </div>
        </Zoom>
    )
};

export default NavMobile;