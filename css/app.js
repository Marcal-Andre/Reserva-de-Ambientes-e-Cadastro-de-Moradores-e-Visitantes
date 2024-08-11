function showComponent(component) {  
    let html = '';  
    switch (component) {  
        case 'chat':  
            html = '<h3>Chat</h3><div>[Sistema de Chat em Tempo Real]</div>';  
            break;  
        case 'schedule':  
            html = '<h3>Reserva de Ambientes</h3><form>[Formulário de Agendamento]</form>';  
            break;  
        case 'visitorLog':  
            html = '<h3>Registro de Visitantes</h3><form>[Formulário de Registro de Visitantes]</form>';  
            break;  
        case 'keyRegistry':  
            html = '<h3>Registro de Chaves</h3><form>[Formulário de Registro de Chaves]</form>';  
            break;  
        default:  
            html = '<h3>Escolha uma opção</h3>';  
    }  
    document.getElementById('componentArea').innerHTML = html;  
}  

function showContact(employee) {  
    let contacts = {  
        'funcionario1': 'Contato: 1234-5678',  
        'funcionario2': 'Contato: 2345-6789',  
        'funcionario3': 'Contato: 3456-7890', 
        'funcionario4': 'Contato: 3456-7890',  
        'funcionario5': 'Contato: 3456-7890',  
        'funcionario6': 'Contato: 3456-7890',  
        'funcionario7': 'Contato: 3256-1734',  
    };  
    
    document.getElementById('contactInfo').innerText = contacts[employee] || 'Contato não encontrado';  
}