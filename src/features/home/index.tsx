import AddTodo from './add-todo';
import Todo from './todo';
import Done from './done';

export default function Home() {
  return (
    <div className="pt-19 md:pt-21 max-w-300 w-full mx-auto xl:px-0 px-6 h-dvh flex flex-col gap-6 md:gap-10 bg-amber-400">
      <AddTodo />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-10">
        <Todo />
        <Done />
      </div>
    </div>
  );
}
