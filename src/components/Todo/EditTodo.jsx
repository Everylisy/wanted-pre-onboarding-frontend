import { useState } from 'react';
import { put } from '../../api';
import Button from '../TodoUI/Button';
import Input from '../TodoUI/Input';
import { TodoButtonWrapper } from '../TodoUI/Layout';

function EditTodo({ todo, setEdit }) {
  const [inpTodo, setInpTodo] = useState(todo.todo);

  const handleSubmit = async (e) => {
    try {
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
    } catch (error) {
      if (error.response.data.message) alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        input={{
          [`data-testid`]: 'modify-input',
          onChange: (e) => setInpTodo(e.target.value),
          value: inpTodo,
          autoFocus: true,
        }}
      />
      <TodoButtonWrapper>
        <Button
          btnText="제출"
          button={{ [`data-testid`]: 'submit-button', type: 'submit' }}
        />
        <Button
          btnText="취소"
          button={{
            [`data-testid`]: 'cancel-button',
            type: 'button',
            onClick: () => setEdit((cur) => !cur),
          }}
        />
      </TodoButtonWrapper>
    </form>
  );
}

export default EditTodo;
