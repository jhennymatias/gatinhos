
import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import { FaCat, FaDog } from 'react-icons/fa';
import Menu from '../../components/menu';
import Input from '../../components/input';

function Cuidados() {
    return (
        <div className="cuidados-container">
            <div className="cuidados-content">
                <Menu />
                <div className="cuidados-body">
                    Cuidados
                </div>
            </div>
        </div>
    );
}

export default Cuidados;