import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import {FaCat } from 'react-icons/fa';
import Menu from '../../components/menu';

function Home() {
    return (
        <div className="alimentos-container">
            <div className="alimentos-content">
                <Menu />
                <div className="alimentos-body">
                    <div className="pesquisar">
                        Pesquisar
                        <input type="text" placeholder="Digite o nome do alimento" />
                    </div>
                    <div className="itens">
                        <div className="item">
                            <strong>Chocolate</strong>
                            <p>Toxico para: <FaCat /></p>
                            <Link to="/item">Leia mais</Link>
                        </div>

                        <div className="item">
                            <strong>Nome do alimento</strong>
                            <p>Toxico para: <FaCat /></p>
                            <p>ler mais </p>
                        </div>

                        <div className="item">
                            <strong>Nome do alimento</strong>
                            <p>Toxico para: <FaCat /></p>
                            <p>ler mais </p>
                        </div>
                        <div className="item">
                            <strong>Nome do alimento</strong>
                            <p>Toxico para: <FaCat /></p>
                            <p>ler mais </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;