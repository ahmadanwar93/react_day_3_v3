// import logo from './logo.svg';
// import './App.css';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import Details from './containers/dashboard/Details';
import CreateProduct from './containers/createProduct';
import Header from './components/header/';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
    <Router className = 'App'>
      <Header />
      <Switch>
        <Route path="/dashboard/:id" component={Details} exact />      
        <Route path="/dashboard" component={Dashboard} exact />        
        <Route path="/" component={Login} exact />
        <Route path="/create" component={CreateProduct} exact />
      </Switch>  
    </Router>
    
  );
}

export default App;
