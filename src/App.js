import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {addition,sub,mult,div} from './lib/testHelper'
import {TodoForm,TodoButton} from './components/todo';

class App extends Component {
  state = {
    todos: [],
   
    number1:'',
    number2:'',
    result:'',
    operator:'',
    resp:'',
    selectValue:''
   
  }
  handleChangeDropdown = (evt) =>{
    this.setState({selectValue:evt.target.value});
  }

   handleSubmit =(evt) =>{
  evt.preventDefault();
 
  //parseInt tranform string to int
const nbr1 =parseInt(this.state.number1,10)
const nbr2 = parseInt(this.state.number2,10)
			switch (this.state.selectValue){
			case '+':
			this.setState({ result : addition(nbr1,nbr2)}) 
			      break;
			case '-':

			this.setState({ result : sub(nbr1,nbr2)}) 
			break;
			case '/':
			this.setState({ result : div(nbr1,nbr2)}) 
			break;
			case '*':
			this.setState({ result : mult(nbr1,nbr2)}) 
			break;
			}}

    handleInputChangeNbr1=(evt) =>{
    this.setState({
    number1 :evt.target.value
    })}

    handleInputChangeNbr2=(evt) =>{
    this.setState({
    number2 :evt.target.value
    
    })}


  render() { 
    return (
				<div className="App">
				  <div className="App-header">
				  <img src={logo} className="App-logo" alt="logo" />
				   <h2>Simple Calculator updated calc jhjhjhjhjh</h2>
				  </div>
       
          
         <div className="calc-form">
         <TodoForm handleInputChangeNbr1 = {this.handleInputChangeNbr1}
         handleInputChangeNbr2 = {this.handleInputChangeNbr2}
         number1 = {this.state.number1}
          number2 = {this.state.number2}
         selectValue = {this.state.selectValue}
         handleChangeDropdown = { this.handleChangeDropdown}/>

        <div className="answer">
           <button className="btn-result" type="submit" onClick={this.handleSubmit}>Result</button>
          <label className="lbl-result">{this.state.number1}{this.state.selectValue}{this.state.number2} = {this.state.result}</label>
        </div>
         </div>
      </div>
    );
  }
}

export default App;
