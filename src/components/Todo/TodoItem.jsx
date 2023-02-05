import { useState } from 'react';
import Button from '../TodoUI/Button';
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
        {edit && <EditTodo todo={todo} setEdit={setEdit} />}
        {!edit && (
          <>
            <Button
              btnText="수정"
              button={{
                [`data-testid`]: 'modify-button',
                onClick: () => setEdit((cur) => !cur),
              }}
            />
            <DelTodo todoId={todo.id} setTodoList={setTodoList} />
          </>
        )}
      </li>
    </ul>
  );
}

export default TodoItem;
