import React from 'react';
import { del } from '../../api';

function DelTodo({ todoId, setTodoList }) {
  const handleDelete = async () => {
    try {
      await del(`todos/${todoId}`);
      setTodoList((prev) => prev.filter((value) => value.id !== todoId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button data-testid="delete-button" onClick={handleDelete}>
      삭제
    </button>
  );
}

export default DelTodo;
