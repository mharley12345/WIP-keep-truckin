import React,{Component} from 'react';
import SignUp from './Components/SignUp'
import './App.css';

   class App extends Component { 
     constructor(props){
       super(props);
       this.state= {}
     }
     render(){
  return (
    <div className="App">
      <SignUp/>
    </div>
  );
}
   }

export default App;
