import React, { Component } from 'react'
import './CreateTodoButton.css'
import ButtonOpenModal from '../assets/ButtonOpenModal.svg'

export default class CreateTodoButton extends Component {
  render() {
    return (
     <>
        <button className='createTodoButon' 
        onClick={
          (event) => {
            console.log("le diste click");
            
          }
        } ></button>
        
        <img className="ButtonOpenModal" src={ButtonOpenModal} alt="blue button with white cross which open the 'Create New ToDo modal'" />
     </>
    )
  }
}
