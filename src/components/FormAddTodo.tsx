import { useState, ChangeEvent } from "react"

interface Props {
    addTodo: (text: string) => void;
}

const FormAddTodo = ({addTodo}: Props) => {

  const [text, setText] = useState("")

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return
    addTodo(trimmedText);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          Todo
          <input
            type="text"
            id="todo"
            name="todo"
            placeholder="Ingrese Todo"
            value={text}
            onChange={(e)=> setText(e.target.value)} />
          <button type="submit">Add todo</button>
        </label>
      </form>
  )
}

export default FormAddTodo