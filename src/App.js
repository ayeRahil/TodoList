import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';
import './App.css';
import firebase from 'firebase';



function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added or removed
  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      /* console.log(snapshot.docs.map(doc => doc.data().todo)) */
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);


  const addTodo = (event) => {
    //This will fire off when we click the button
    event.preventDefault(); //It will stop the Refresh
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    /* setTodos([...todos, input]); */
    setInput('');//It will clear the input after hitting ENTER or clicking the button.
  }


  return (
    <div className="App">
      <h1>Hello Guys!!</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)} />
 */}
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} type="submit" variant="contained" onClick={addTodo} color="primary">
          Add Todo
        </Button>

        {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>


      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/> //break your code into components... so we move this in Todo.js file
         // {/* <li>{todo}</li> */}
        ))}
      </ul>
    </div>
  );
}

export default App;
