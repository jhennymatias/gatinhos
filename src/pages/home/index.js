import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import {FaAppleAlt, FaLeaf, FaFileMedical } from 'react-icons/fa';
import Menu from '../../components/menu';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <Menu />

                <h2 className="home-title">Selecione uma área para descobrir o que é tóxico para seu pet:</h2>
                <div className="home-body">
                    <div className="categoria"> <Link to="/alimentos">Alimentos</Link><FaAppleAlt/></div>
                    <div className="categoria">Remédios <FaFileMedical/> </div>
                    <div className="categoria">Plantas <FaLeaf /></div>
                </div>
            </div>
        </div>
    );
}

export default Home;