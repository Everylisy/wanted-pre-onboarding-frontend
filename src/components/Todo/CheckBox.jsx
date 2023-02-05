import { useState } from 'react';
import { put } from '../../api';
import Input from '../UI/Input';

function CheckBox({ todo }) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const handleCheck = async () => {
    setIsChecked((cur) => !cur);
    const res = await put(`todos/${todo.id}`, {
      todo: todo.todo,
      isCompleted: !isChecked,
    });
    if (res.data.id === todo.id) todo.isCompleted = res.data.isCompleted;
  };

  return (
    <Input
      input={{
        type: 'checkbox',
        checked: isChecked ? true : false,
        onChange: handleCheck,
      }}
    />
  );
}

export default CheckBox;