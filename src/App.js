import React,{Component} from 'react';
import SignUp from './Components/SignUp'
import Nav from './Components/Nav'
import Login from './Components/Login'
import { Route } from "react-router-dom";
import './App.css';

   class App extends Component { 
     constructor(props){
       super(props);
       this.state= {};
   

    };
    
     render(){
  return (
    <div className="App">
      <Nav/>
 <Route exact path="/signup" component={SignUp} />
 <Route exact path="/login" component={Login} />
    </div>
  );
}
   }

export default App;
