// todo 입력 필드
import AddButton from './add-button';
import {fetchTodos} from '@/lib/actions';

export default function AddTodo() {
  return (
    <section className="w-full flex justify-between items-center gap-4">
      <form action={fetchTodos} className="flex flex-1 gap-4">
        <input
          type="text"
          name="todo"
          placeholder="할 일을 입력해주세요"
          className="controls px-6 flex-1"
          pattern=".{1,}"
          autoFocus
          required
        />

        <AddButton />
      </form>
    </section>
  );
}
