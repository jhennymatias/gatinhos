import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaPlus, FaHome, FaInfo} from 'react-icons/fa';
function Menu() {
    return (
        <div className="home-header">
            <h2>Gatinhos</h2>
            <div className="links">
                <Link className="btn-header" to="/"><FaHome size={25} color="white" /></Link>
                <Link className="btn-header" to="/cuidados"><FaPlus size={25} color="white" /></Link>
                <Link className="btn-header" to="/info"><FaInfo size={25} color="white" /></Link>
            </div>
        </div>
    );
}

export default Menu;