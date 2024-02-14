import React from 'react'
import './TodoItem.css'
import check from '../assets/Check.png'
import equis from '../assets/X.png'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      > </span>
        <div className="TodoItemLeft">
          <img src={check} alt="" className="TodoStatus"/>
        </div>
        <div className="TodoItemRight">
          <p className="TodoItemText">{props.text}{props.completed}</p>
          <img className="ClosingEquis" src={equis} alt="" />
        </div>
    </li>
    
  )
}

export default TodoItem