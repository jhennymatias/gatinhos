import React from 'react';
import './styles.css';
import { FaDog, FaCat, FaCircle, FaHome } from 'react-icons/fa';
import Menu from '../../components/menu';
import { GiRabbit } from 'react-icons/gi';
import chocolate from '../../img/chocolate.jpg';

function Item() {
    return (
        <div className="item-container">
            <div className="item-content">
                <Menu />
                <div className="item-body">
                    <div className="item-first-column">
                        <h1>Chocolate</h1>
                        <div className="item-composition">
                            <p>Composição</p>
                            <ul>
                                <li>- Cafeína</li>
                                <li>- Teobromina</li>
                            </ul>
                        </div>
                        <div className="item-animals">
                            <p>Tóxico para quais animais</p>
                            <div className="animals" >
                                <p>
                                    <FaDog title="dog" fontSize='40px' />
                                    <GiRabbit title="rabbit" fontSize='40px' />
                                    <FaCat title="rabbit" fontSize='40px' />
                                </p>
                            </div>
                        </div>
                        <p className="item-grau">
                            Grau de toxidade:
                            <FaCircle color="red" fontSize="20px" />
                        </p>
                    </div>
                    <div className="item-img">
                        <img src={chocolate} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;