
import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import { FaCat, FaDog } from 'react-icons/fa';
import Menu from '../../components/menu';
import Input from '../../components/input';

function Lista() {
    return (
        <div className="lista-container">
            <div className="lista-content">
                <Menu />
                <div className="lista-body">
                    lista
                </div>
            </div>
        </div>
    );
}

export default Lista;