import React, { useEffect, useState } from 'react';  
import socketIOClient from 'socket.io-client';  

const ENDPOINT = "http://localhost:5000"; // O URL do seu servidor  

const Dashboard = () => {  
    const [messages, setMessages] = useState([]);  
    const [message, setMessage] = useState('');  
    const socket = socketIOClient(ENDPOINT);  

    useEffect(() => {  
        socket.on('receive message', (msg) => {  
            setMessages(prevMessages => [...prevMessages, msg]);  
        });  
        
        return () => socket.disconnect();  
    }, []);  

    const sendMessage = (e) => {  
        e.preventDefault();  
        socket.emit('send message', message);  
        setMessage('');  
    };  

    return (  
        <div className="container mt-5">  
            <h2>Dashboard do Condomínio</h2>  
            <div className="chat-box">  
                <h5>Chat Interno</h5>  
                <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>  
                    {messages.map((msg, index) => (  
                        <div key={index} className="message">  
                            {msg}  
                        </div>  
                    ))}  
                </div>  
                <form onSubmit={sendMessage}>  
                    <input   
                        type="text"   
                        value={message}   
                        onChange={(e) => setMessage(e.target.value)}  
                        placeholder="Digite sua mensagem..."   
                        className="form-control"   
                    />  
                    <button type="submit" className="btn btn-primary mt-2">Enviar</button>  
                </form>  
            </div>  
        </div>  
    );  
};  

export default Dashboard;