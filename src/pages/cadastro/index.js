
import React from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Input from '../../components/input';
import Select from '../../components/Select';
function Cadastro() {
    return (
        <div className="cadastro-container">
            <div className="cadastro-content">
                <Menu />
                <div className="cadastro-body">
                    <Input
                        id="nome"
                        label="Nome"
                        type="text"
                    />

                    <Input
                        id="composicao"
                        label="Composição"
                        type="text"
                    />
                    
                    <Select
                        id="categoria"
                        label="Categoria"
                        required
                        options={[
                            { value: 'alimento', label: 'Alimento' },
                            { value: 'planta', label: 'Planta' },
                            { value: 'remedio', label: 'Remédio' }
                        ]}
                    />

                    <Select
                        id="risco"
                        label="Risco"
                        required
                        options={[
                            { value: 'baixo', label: 'Baixo' },
                            { value: 'médio', label: 'Médio' },
                            { value: 'alto', label: 'Alto' }
                        ]}
                    />

                    <Input
                        id="foto"
                        label="Foto"
                        type="text"
                    />

                    <button>Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;