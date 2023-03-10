import { del } from '../../api';
import Button from '../TodoUI/Button';

function DelTodo({ todoId, setTodoList }) {
  const handleDelete = async () => {
    try {
      await del(`todos/${todoId}`);
      setTodoList((prev) => prev.filter((value) => value.id !== todoId));
    } catch (error) {
      if (error.response.data.message) alert(error.response.data.message);
    }
  };

  return (
    <Button
      btnText="삭제"
      button={{ [`data-testid`]: 'delete-button', onClick: handleDelete }}
      color="#FF3E55"
    />
  );
}

export default DelTodo;
