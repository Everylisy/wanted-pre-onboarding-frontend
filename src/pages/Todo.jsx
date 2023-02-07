import React, { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../api';
import AddTodo from '../components/Todo/AddTodo';
import TodoItem from '../components/Todo/TodoItem';
import Layout from '../components/TodoUI/Layout';

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
    <Layout>
      <AddTodo setTodoList={setTodoList} />
      <ul>
        {todolist.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} setTodoList={setTodoList} />
          );
        })}
      </ul>
    </Layout>
  );
}

export default Todo;
