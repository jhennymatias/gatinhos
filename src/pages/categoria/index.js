import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
import { FaCat, FaCircle, FaDog } from 'react-icons/fa';
import Menu from '../../components/menu';
import Input from '../../components/input';

function Categoria() {
    return (
        <div className="alimentos-container">
            <div className="alimentos-content">
                <Menu />
                <div className="alimentos-body">
                    <div className="pesquisar">
                        <p>Pesquisar</p>
                        <Input
                            id="pesquisar"
                            label=""
                            type="text"
                            placeholder="Digite o nome do alimento"
                        />
                    </div>
                    <div className="classificacao">
                        <FaCircle className="classificacao-icon" color="darkred" /> Grave
                        <FaCircle className="classificacao-icon"color="darkorange" /> Médio
                        <FaCircle className="classificacao-icon" color="darkolivegreen" /> Pouco
                    </div>
                    <div className="itens">
                        <Link to="/item">
                            <div id="alto" className="item">
                                <strong className="titulo">Chocolate</strong>
                                <p>Tóxico para: <FaCat /> <FaDog /></p>
                            </div>
                        </Link>


                        <div id="fraco" className="item">
                            <strong>Cebola</strong>
                            <p>Tóxico para: <FaCat /></p>
                        </div>

                        <div id="medio" className="item">
                            <strong>Alho</strong>
                            <p>Toxico para: <FaCat /></p>
                        </div>
                        <div id="alto" className="item">
                            <strong>Alcool</strong>
                            <p>Toxico para: <FaCat /></p>
                        </div>
                        <div id="medio" className="item">
                            <strong>Arroz</strong>
                            <p>Toxico para: <FaCat /></p>
                        </div>
                        <div id="fraco" className="item">
                            <strong>Açucar</strong>
                            <p>Toxico para: <FaCat /></p>
                        </div>
                    </div>

                </div>

                <p className="pages">1 2 3 ... 5</p>
            </div>
        </div>
    );
}

export default Categoria;