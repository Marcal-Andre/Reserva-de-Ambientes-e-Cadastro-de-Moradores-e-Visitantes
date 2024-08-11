let stompClient = null;  

function connect() {  
    const socket = new SockJS('/chat');  
    stompClient = Stomp.over(socket);  
    stompClient.connect({}, function (frame) {  
        console.log('Conectado: ' + frame);  
        stompClient.subscribe('/topic/messages', function (message) {  
            displayMessage(JSON.parse(message.body));  
        });  
    });  
}  

function sendMessage() {  
    const username = document.getElementById('username').value;  
    const messageText = document.getElementById('message').value;  

    const message = {  
        from: username,  
        text: messageText  
    };  

    stompClient.send("/app/sendMessage", {}, JSON.stringify(message));  
    document.getElementById('message').value = '';  
}  

function displayMessage(message) {  
    const messagesDiv = document.getElementById('messages');  
    messagesDiv.innerHTML += `<p><strong>${message.from}:</strong> ${message.text}</p>`;  
}  

window.onload = connect;