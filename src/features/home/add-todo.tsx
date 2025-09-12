import AddButton from './add-button';

export default function AddTodo() {
  return (
    <section className="w-full flex justify-between items-center gap-4">
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        className="controls px-6 flex-1"
      />
      <AddButton />
    </section>
  );
}
