import React from 'react';
import DelTodo from './DelTodo';

function TodoItem({ todo, setTodoList }) {
  return (
    <ul>
      <li>
        <label>
          <input type="checkbox" checked={todo.isCompleted} readOnly />
          <span>{todo.todo}</span>
        </label>
        <button data-testid="modify-button">수정</button>
        <DelTodo todoId={todo.id} setTodoList={setTodoList} />
      </li>
    </ul>
  );
}

export default TodoItem;
