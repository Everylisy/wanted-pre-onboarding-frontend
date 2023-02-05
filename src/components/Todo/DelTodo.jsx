import { del } from '../../api';
import Button from '../UI/Button';

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
    <Button
      btnText="삭제"
      button={{ [`data-testid`]: 'delete-button', onClick: handleDelete }}
    />
  );
}

export default DelTodo;
