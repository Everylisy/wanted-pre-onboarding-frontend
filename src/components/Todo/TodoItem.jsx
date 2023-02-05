import React, { useState } from 'react';
import CheckBox from './CheckBox';
import DelTodo from './DelTodo';
import EditTodo from './EditTodo';

function TodoItem({ todo, setTodoList }) {
  const [edit, setEdit] = useState(false);
  return (
    <ul>
      <li>
        <label>
          <CheckBox todo={todo} />
          {!edit && <span>{todo.todo}</span>}
        </label>
        {edit ? (
          <EditTodo todo={todo} setEdit={setEdit} />
        ) : (
          <>
            <button
              data-testid="modify-button"
              onClick={() => setEdit((cur) => !cur)}
            >
              수정
            </button>
            <DelTodo todoId={todo.id} setTodoList={setTodoList} />
          </>
        )}
      </li>
    </ul>
  );
}

export default TodoItem;
