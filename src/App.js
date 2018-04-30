import React, { Component } from 'react';
import { Provider } from 'unstated'

import CreateTodo from './CreateTodo'
import Todos from './Todos'

class App extends Component {
  render() {
    return (
      <Provider>
        <CreateTodo />
        <Todos />
      </Provider>
    );
  }
}

export default App;
