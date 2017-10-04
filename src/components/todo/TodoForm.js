import React from 'react'

export const TodoForm = (props) => (
	<form className="TodoForm" >
         <input type="text" placeholder="Number1" className="input-nbr"
         onChange={props.handleInputChangeNbr1} 
         value={props.number1}/>

          <select value={props.selectValue} 
         onChange={props.handleChangeDropdown} className="drp-op">
          <option value="">select operator</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
             <option value="/">/</option>
          </select>
          <input type="text" placeholder="Number2" className="input-nbr"
         onChange={props.handleInputChangeNbr2} 
         value={props.number2}/>
    </form>)
    

TodoForm.propTypes = {
	number1 : React.PropTypes.number,
	number2 : React.PropTypes.number,
 	selectValue : React.PropTypes.string
 }