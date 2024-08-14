import React, { useState } from 'react';  

const CadastroMoradores = () => {  
    const [nome, setNome] = useState('');  
    const [rg, setRg] = useState('');  
    const [carros, setCarros] = useState([{ nome: '', modelo: '' }]);  

    const adicionarCarro = () => {  
        setCarros([...carros, { nome: '', modelo: '' }]);  
    };  

    const handleCarroChange = (index, event) => {  
        const newCarros = [...carros];  
        newCarros[index][event.target.name] = event.target.value;  
        setCarros(newCarros);  
    };  

    const handleSubmit = (event) => {  
        event.preventDefault();  
        // Lógica para armazenar os moradores no banco de dados  
    };  

    return (  
        <div className="container mt-5">  
            <h2>Cadastro de Moradores</h2>  
            <form onSubmit={handleSubmit}>  
                <div className="form-group">  
                    <label>Nome Completo:</label>  
                    <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />  
                </div>  
                <div className="form-group">  
                    <label>RG:</label>  
                    <input type="text" className="form-control" value={rg} onChange={(e) => setRg(e.target.value)} />  
                </div>  
                {carros.map((carro, index) => (  
                    <div key={index} className="form-group">  
                        <label>Carro {index + 1}:</label>  
                        <input   
                            type="text"   
                            name="nome"   
                            placeholder="Nome do Carro"   
                            className="form-control"   
                            value={carro.nome}   
                            onChange={(e) => handleCarroChange(index, e)}   
                        />  
                        <input   
                            type="text"   
                            name="modelo"   
                            placeholder="Modelo do Carro"   
                            className="form-control"   
                            value={carro.modelo}   
                            onChange={(e) => handleCarroChange(index, e)}   
                        />  
                    </div>  
                ))}  
                <button type="button" onClick={adicionarCarro} className="btn btn-secondary">Adicionar Carro</button>  
                <button type="submit" className="btn btn-primary">Cadastrar</button>  
            </form>  
        </div>  
    );  
};  

export default CadastroMoradores;