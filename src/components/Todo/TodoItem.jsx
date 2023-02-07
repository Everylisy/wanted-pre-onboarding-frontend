import { useState } from 'react';
import Button from '../TodoUI/Button';
import { ListWrapper, TodoButtonWrapper } from '../TodoUI/Layout';
import CheckBox from './CheckBox';
import DelTodo from './DelTodo';
import EditTodo from './EditTodo';

function TodoItem({ todo, setTodoList }) {
  const [edit, setEdit] = useState(false);

  return (
    <li>
      <ListWrapper>
        <label>
          <CheckBox todo={todo} />
          {!edit && <span>{todo.todo}</span>}
        </label>
        {edit && <EditTodo todo={todo} setEdit={setEdit} />}
        {!edit && (
          <TodoButtonWrapper>
            <Button
              btnText="수정"
              button={{
                [`data-testid`]: 'modify-button',
                onClick: () => setEdit((cur) => !cur),
              }}
            />
            <DelTodo todoId={todo.id} setTodoList={setTodoList} />
          </TodoButtonWrapper>
        )}
      </ListWrapper>
    </li>
  );
}

export default TodoItem;
