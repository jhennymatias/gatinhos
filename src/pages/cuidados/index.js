import React, { useState, useEffect } from 'react';
import api from '../../service/api';

import './styles.css';
import Menu from '../../components/menu';
function Cuidados() {
    const [animals, setAnimal] = useState([]);

    useEffect(() => {
        api.get('animal')
            .then(response => {
                setAnimal(response.data);
            });
    }, [animals]);

    console.log(animals)
    return (
        <div className="cuidados-container">
            <div className="cuidados-content">
                <Menu />
                <div className="cuidados-body">
                    <ul>
                        {animals.map(animal => (
                            <li key={animal.id}>
                                <strong>{animal.name}</strong>
                                <p>{animal.care}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cuidados;