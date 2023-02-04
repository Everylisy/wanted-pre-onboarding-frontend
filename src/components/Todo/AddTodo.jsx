import React from 'react';
import { useState } from 'react';
import { post } from '../../api';

function AddTodo({ setTodoList }) {
  const [inpTodo, setInpTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isTodoValid) {
        const res = await post('todos', {
          todo: inpTodo,
        });
        setTodoList((prev) => [...prev, res.data]);
      }
      setInpTodo('');
    } catch (error) {
      console.log(error);
      if (error.response.data.message) alert(error.response.data.message);
    }
  };

  const isTodoValid = inpTodo.trim().length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="new-todo-input"
        type="text"
        placeholder="할 일 입력"
        required
        minLength={1}
        onChange={(e) => setInpTodo(e.target.value)}
        value={inpTodo}
      />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  );
}

export default AddTodo;
