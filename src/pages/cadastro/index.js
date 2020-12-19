
import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import { FaCat, FaDog } from 'react-icons/fa';
import Menu from '../../components/menu';
import Input from '../../components/input';

function Cadastro() {
    return (
        <div className="cadastro-container">
            <div className="cadastro-content">
                <Menu />
                <div className="cadastro-body">
                    cadastro
                </div>
            </div>
        </div>
    );
}

export default Cadastro;