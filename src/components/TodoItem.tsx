import { Todo } from "../App";

interface Props {
    todo: Todo;
    toggleTodo: (selectedTodo: Todo) => void;
    removeTodo: (selectedTodo: Todo) => void;
}

const TodoItem = ({todo, toggleTodo, removeTodo}: Props) => {
  return (
    <article>
              <label htmlFor="todo">
                <input
                  type="checkbox"
                  name="todo"
                  id="todo"
                  checked={todo.complete}
                  onChange={()=> toggleTodo(todo)} />
                {todo.text}
              </label>
              <button
                className="contrast"
                onClick={()=>
                removeTodo(todo)}>Remove</button>
            </article>
  )
}

export default TodoItem