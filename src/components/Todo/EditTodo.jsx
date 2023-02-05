import { useState } from 'react';
import { put } from '../../api';
import Button from '../UI/Button';
import Input from '../UI/Input';

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
      <Input
        input={{
          [`data-testid`]: 'modify-input',
          onChange: (e) => setInpTodo(e.target.value),
          value: inpTodo,
        }}
      />
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
    </form>
  );
}

export default EditTodo;
