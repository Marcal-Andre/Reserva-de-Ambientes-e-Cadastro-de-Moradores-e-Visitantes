import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import CadastroMoradores from './components/CadastroMoradores';  
import RegistroAutorizados from './components/RegistroAutorizados';  
import RegistroPrestadores from './components/RegistroPrestadores';  
import Agendamentos from './components/Agendamentos';  
import RegistroVisitantes from './components/RegistroVisitantes';  
import SaidaChaves from './components/SaidaChaves';  
import Dashboard from './components/Dashboard';  

const App = () => {  
    return (  
        <Router>  
            <div>  
                <Navbar />  
                <Switch>  
                    <Route path="/" exact component={Dashboard} />  
                    <Route path="/cadastro-moradores" component={CadastroMoradores} />  
                    <Route path="/registro-autorizados" component={RegistroAutorizados} />  
                    <Route path="/registro-prestadores" component={RegistroPrestadores} />  
                    <Route path="/agendamentos" component={Agendamentos} />  
                    <Route path="/registro-visitantes" component={RegistroVisitantes} />  
                    <Route path="/saida-chaves" component={SaidaChaves} />  
                </Switch>  
            </div>  
        </Router>  
    );  
}  

export default App;