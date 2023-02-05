import { useState } from 'react';
import { post } from '../../api';
import Button from '../UI/Button';
import Input from '../UI/Input';

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
      if (error.response.data.message) alert(error.response.data.message);
    }
  };

  const isTodoValid = inpTodo.trim().length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        input={{
          [`data-testid`]: 'new-todo-input',
          type: 'text',
          placeholder: '할 일 입력',
          required: true,
          autoFocus: true,
          minLength: 1,
          onChange: (e) => setInpTodo(e.target.value),
          value: inpTodo,
        }}
      />
      <Button
        btnText="추가"
        button={{ [`data-testid`]: 'new-todo-add-button', type: 'submit' }}
      />
    </form>
  );
}

export default AddTodo;
