import { useState } from 'react';
import { put } from '../../api';
import Input from '../TodoUI/Input';

function CheckBox({ todo }) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const handleCheck = async () => {
    try {
      setIsChecked((cur) => !cur);
      const res = await put(`todos/${todo.id}`, {
        todo: todo.todo,
        isCompleted: !isChecked,
      });
      if (res.data.id === todo.id) todo.isCompleted = res.data.isCompleted;
    } catch (error) {
      if (error.response.data.message) alert(error.response.data.message);
    }
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
