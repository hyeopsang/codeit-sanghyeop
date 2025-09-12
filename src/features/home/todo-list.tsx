'use client';
import Image from 'next/image';
import type {Todo} from '@/types/Todo';
import TodoItem from './todo-item';
import EmptyTodo from './empty-todo';
import {useEffect, useState} from 'react';
import {fetchWrapper} from '@/api/fetchWrapper';
interface TodoProps {
  todoList?: Todo[];
}

export default function TodoList({todoList = []}: TodoProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const data = await fetchWrapper.get('items');
        setTodos(data);
        console.log(data);
      } catch (error) {
        console.error('Todo 불러오기 실패:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);
  return (
    <section className="flex flex-col gap-4">
      <Image
        src={'/images/todo.svg'}
        alt="todo title"
        title="todo"
        width={101}
        height={36}
      />
      {todos.length === 0 && <EmptyTodo />}
      {todos.length > 0 && (
        <ul className="flex flex-col gap-4 items-center justify-start">
          {todos.map((todo) => (
            <TodoItem key={todo.id} title={todo.name} />
          ))}
          <TodoItem title="성하 보고싶다" />
          <TodoItem title="성하 보고싶다" />
          <TodoItem title="성하 보고싶다" />
        </ul>
      )}
    </section>
  );
}
