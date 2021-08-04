import React from 'react';
import "./App.css";
import Output from './Output';
import Operand from './Operand';
import Operator from './Operator';
class App extends React.Component{

  state = {
    value : '',
    operand1 : '',
    operand2 : '',
    operator : '',
    formula : '',
    number :[0,1,2,3,4,5,6,7,8,9],
    operators :["+","-","*","/"],
    display : ''
  }

  bringOperand = (operand) =>{
    let form = this.state.formula + operand;
      if(this.state.operand1 == ''){
        this.setState({
          operand1 : operand,
          formula : form,
          display : form
        })
        
      }else if(this.state.operand2 == ''){
        if(this.state.operator != ''){
          
          let newvalue = eval(form);
          this.setState({
            operand1 : '',
            operand2 : '',
            formula : '',
            operator : '',
            value : newvalue,
            display : newvalue,
          })
          console.log("::::::::::::::::::::::::::::::::::::");
        }else{
          alert("operator-missing")
        }
        
      }

  }

  
  bringOperator = (operator) =>{
    console.log(operator);
    let form = this.state.formula + operator + " ";
    if(this.state.operand1 != '' && this.state.operand2 == ''){
      this.setState({
        operator : operator,
        formula : form,
        display : form
      })
      
    }
  }


  render = () =>{
    return(
      <div className = "main-container">
        <Output
          display = {this.state.display}
        />
        <Operand 
          bringOperand = {this.bringOperand}
          number = {this.state.number}
        />
        <Operator
          operators = {this.state.operators}
          bringOperator = {this.bringOperator}
        />
      </div>
    )
  }
}
export default App;
