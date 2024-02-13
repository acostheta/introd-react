import './TodoCounter.css';

function TodoCounter({total, completed}) {
      return(
      <h1>Has completado  <b>{completed}</b> de  <b>{total}</b> TODO's</h1>
    )
}

export default TodoCounter;