import React, { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../api';
import AddTodo from '../components/Todo/AddTodo';
import TodoItem from '../components/Todo/TodoItem';

function Todo() {
  const [todolist, setTodoList] = useState([]);

  const fetchTodoList = async () => {
    try {
      const res = await get('todos');
      if (res) setTodoList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <>
      <div>Todo</div>
      <AddTodo setTodoList={setTodoList} />
      {todolist.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            isCompleted={todo.isCompleted}
            todo={todo.todo}
          />
        );
      })}
    </>
  );
}

export default Todo;
