import React from 'react'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'
import CreateTodoButton from './components/CreateTodoButton'
import "./App.css"

const defaultTodos = [
  { text: "Cortar cebolla", completed: true }, 
  { text: "Tomar el curso de react", completed: false }, 
  { text: "Llorar con la llorona", completed: true },
  { text: "Jugar Dark Souls", completed: false }  
];



function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(
    todo => !!todo.completed).length;
  const totalTodos = defaultTodos.length;
  
  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      
      return todoText.includes(searchText)
    }
  )

  console.log(searchValue);
  return (
    <> {/* Esto es un React.fragment pero simplificado, 
          evita que se necesite importar React para que funcione. */}
      <div className="container">
      <TodoCounter completed={completedTodos}  total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}

      ></TodoSearch>
      <div className="todo">
        
          <CreateTodoButton/>

        <TodoList>
          {searchedTodos.map( todo => {
            return(
              <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              />
              )
            })}        
        </TodoList>
        
      </div>
    </div>
  </>
  );
}

export default App;
