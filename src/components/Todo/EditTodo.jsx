import React, { useState } from 'react';
import { put } from '../../api';

function EditTodo({ todo, setEdit }) {
  const [inpTodo, setInpTodo] = useState(todo.todo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo.todo === inpTodo) {
      setEdit((cur) => !cur);
      return;
    }
    const res = await put(`todos/${todo.id}`, {
      todo: inpTodo,
      isCompleted: todo.isCompleted,
    });
    if (res.data.id === todo.id) todo.todo = res.data.todo;
    setEdit((cur) => !cur);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setInpTodo(e.target.value)} value={inpTodo} />
      <button type="submit">제출</button>
      <button type="button" onClick={() => setEdit((cur) => !cur)}>
        취소
      </button>
    </form>
  );
}

export default EditTodo;
