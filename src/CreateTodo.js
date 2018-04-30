import React from 'react'
import { Subscribe } from 'unstated'

import TodoContainer from './containers/todoContainer'

const CreateTodo = () => {
  return (
    <div>
      <Subscribe to={[TodoContainer]}>
        {todos =>
          <div>
            <form onSubmit={todos.handleAddTodo}>
              <input
                type="text"
                value={todos.state.todo}
                onChange={todos.handleInputChange}
              />
              <button>Submit</button>
            </form>
          </div>
        }
      </Subscribe>
    </div>
    );
}

export default CreateTodo