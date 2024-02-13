import React from 'react'
import './TodoItem.css'
import check from '../assets/Check.png'
import equis from '../assets/X.png'

function TodoItem({text, completed}) {
  return (
    <li>
    <div className="TodoItem">
      <div className="TodoItemLeft">
        <img src={check} alt="" className="TodoStatus"/>
      </div>
      <div className="TodoItemRight">
        <p className="TodoItemText">{text}{completed}</p>
        <img className="ClosingEquis" src={equis} alt="" />
      </div>
  </div>
    </li>
  )
}

export default TodoItem