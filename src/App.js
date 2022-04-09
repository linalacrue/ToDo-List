import './App.css';
import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  float: right;
  background: palevioletred;
  color: #FFF;
  border-radius: 3px;
  border: 2px solid palevioletred;
  padding: 3px 10px;
  outline: none;
  cursor: pointer    
`;

const Input = styled.input`
  width: 150px;
  outline: none;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
`;

const Div = styled.div`
width: 250px;
height: 50px;
position : relative ; 
background : white ; border-radius : 5 px ;   
margin : 0  auto ; 
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: relative;
`;

const Header = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 36px;
  color: #343a40;
`;

function Todos() {
  const [todos, setTodo] = useState([{ name: "Buy apple" }]);
  const [newTodo, setnewTodo] = useState("");

  const add = todo => setTodo([...todos, todo]);

  const remove = index => {
    setTodo([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };
  
  const handleAddClick = () => {
    
    if (newTodo === "") {
      return;
    }
    
    add({ name: newTodo });
    setnewTodo("");
  };

  return (
    <>
      <Div className="add-todo">
        <Input
          type="text"
          value={newTodo}
          onChange={event => setnewTodo(event.target.value)}
        />
        <Button onClick={handleAddClick}>Add todo</Button>
      </Div>
      <div className="todos">
        {todos.map((todo, index) => {
          return <Todo todo={todo} onRemove={() => remove(index)} />;
        })}
      </div>
   </>
  );
}

function Todo({ todo, Remove }) {
  return (
    <Div className="todo">
      <span>{todo.name}</span>
      <Button onClick={Remove}>Remove</Button>
    </Div>
  );
}



function App() {
  return (
    <div className="App">
      <div className="App">
        <Header>ToDo List</Header>
        <Todos />
      </div>
    </div>
  );
}

export default App;


 
