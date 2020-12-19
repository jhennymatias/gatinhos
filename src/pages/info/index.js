
import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import { FaCat, FaDog } from 'react-icons/fa';
import Menu from '../../components/menu';
import Input from '../../components/input';

function Info() {
    return (
        <div className="info-container">
            <div className="info-content">
                <Menu />
                <div className="info-body">
                    Info
                </div>
            </div>
        </div>
    );
}

export default Info;