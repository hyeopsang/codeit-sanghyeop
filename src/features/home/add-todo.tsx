import PlusIcon from '@/assets/plus.svg';
import Image from 'next/image';
export default function AddTodo() {
  return (
    <section className="w-full flex justify-between items-center gap-4">
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        className="controls px-6 flex-1"
      />
      <button
        type="submit"
        className="controls gap-1 text-slate-900 w-42 min-w-[49px]"
      >
        <PlusIcon />
        <p className="font-bold md:block hidden">추가하기</p>
      </button>
    </section>
  );
}
