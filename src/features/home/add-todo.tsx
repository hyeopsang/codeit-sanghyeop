'use client';
import {FormEvent} from 'react';
import AddButton from './add-button';
import {fetchWrapper} from '@/api/fetchWrapper';

export default function AddTodo() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const todo = formData.get('todo') as string;

    if (!todo || todo.trim().length === 0) {
      alert('할 일을 입력해주세요!');
      return;
    }

    try {
      await fetchWrapper.post('items', {name: todo});
      form.reset();
    } catch (err) {
      console.error('추가 실패:', err);
    }
  }

  return (
    <section className="w-full flex justify-between items-center gap-4">
      <form onSubmit={onSubmit} className="flex flex-1 gap-4">
        <input
          type="text"
          name="todo"
          placeholder="할 일을 입력해주세요"
          className="controls px-6 flex-1"
        />
        <AddButton />
      </form>
    </section>
  );
}
