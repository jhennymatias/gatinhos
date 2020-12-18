import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FiList, FiBookOpen } from 'react-icons/fi'
function Menu() {
    return (
        <div className="home-header">
            <h2>Gatinhos</h2>
            <div className="links">
                <Link className="btn-header" to="/"><FaHome size={25} color="white" /></Link>
                <Link className="btn-header" to="/pesquisas"><FiList size={25} color="white" /></Link>
                <Link className="btn-header" to="/"><FiBookOpen size={25} color="white" /></Link>
            </div>
        </div>
    );
}

export default Menu;