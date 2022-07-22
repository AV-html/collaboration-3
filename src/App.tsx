import React from 'react';

import './App.css';
import {Todolist} from './Todolist';

function App() {
  const tasks = [
    {id: 1, title: 'html', isDone: true},
    {id: 2, title: 'css', isDone: true},
    {id: 3, title: 'js', isDone: true},
    {id: 4, title: 'react', isDone: true},
    {id: 4, title: 'redux', isDone: false},
    {id: 5, title: 'axios', isDone: false},
  ]

  return (
    <div className="App">
      <Todolist tasks={tasks}/>
    </div>
  );
}

export default App;
