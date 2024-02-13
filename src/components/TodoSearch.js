import React from 'react'
import './TodoSearch.css'

function TodoSearch({
  searchValue,
  setSearchValue
}) {
  return (
    <input className="TodoSearch" type="text" placeholder="Ej: Cortar cebolla" 
    value={searchValue}
    onChange={
      (e) => {
        setSearchValue(e.target.value)
      }
    }
    />
  )
}

export default TodoSearch