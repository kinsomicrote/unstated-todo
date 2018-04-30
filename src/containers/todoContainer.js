import { Container } from 'unstated'

class TodoContainer extends Container {
  state = {
    todos: [
      'Mess around with unstated',
      'Start dance class'
    ],
    todo: ''
  };

  handleDeleteTodo = (todo) => {
    this.setState({
      todos: this.state.todos.filter(c => c !== todo)
    })
  }

    
  handleInputChange = (event) => {
    const todo = event.target.value
    this.setState({ todo });
  };

  handleAddTodo = (event) => {
    event.preventDefault()
    this.setState(({todos}) => ({
      todos: todos.concat(this.state.todo)
    }))
    this.setState({ todo: '' });
  }

}

export default TodoContainer