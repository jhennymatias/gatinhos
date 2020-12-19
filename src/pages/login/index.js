
import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import { FaCat, FaDog } from 'react-icons/fa';
import Menu from '../../components/menu';
import Input from '../../components/input';

function Login() {
    return (
        <div className="login-container">
            <div className="login-content">
                <Menu />
                <div className="login-body">
                    login
                </div>
            </div>
        </div>
    );
}

export default Login;