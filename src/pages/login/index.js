import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../service/api';
import './styles.css';
import Menu from '../../components/menu';
import Input from '../../components/input';

function Login() {
    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');
    const histoty = useHistory();

    async function handleLoginUser(e) {
        e.preventDefault();
        try {
            const response = await api.post('loginuser', { LoginEmail, LoginPassword });
            localStorage.setItem('email', LoginEmail);
            localStorage.setItem('name', response.data.name);
            histoty.push('/cadastro');
        } catch (err) {
            alert("Não foi possivel fazer o login!");
        }
    }
    return (
        <div className="login-container">
            <div className="login-content">
                <Menu />
                <div className="login-body">
                    <form onSubmit={handleLoginUser}>
                        <Input
                            id="email"
                            label="E-mail"
                            type="email"
                            value={LoginEmail}
                            onChange={e => setLoginEmail(e.target.value)}

                        />

                        <Input
                            id="LoginPassoword"
                            label="Password"
                            type="password"
                            value={LoginPassword}
                            onChange={e => setLoginPassword(e.target.value)}
                            required
                            minlength="6"
                        />
                        <button>Login </button>

                        <p className="cadastroLink">
                            Don't have an account? <br />
                            <Link to="createUser">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;