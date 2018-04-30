import React from 'react';
import { Subscribe } from 'unstated';

import TodoContainer from './containers/todoContainer'

const Todos = () => (
  <ul>
    <Subscribe to={[TodoContainer]}>
      {todos =>
        todos.state.todos.map(todo => (
          <li key={todo}>
            {todo} <button onClick={() => todos.handleDeleteTodo(todo)}>X</button>
          </li>
        ))
      }
    </Subscribe>
  </ul>
);

export default Todos

