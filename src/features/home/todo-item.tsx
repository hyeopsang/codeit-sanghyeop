import UnCheckedIcon from '@/assets/unchecked.svg';

export default function TodoItem() {
  return (
    <li className="w-full h-[50px] border-2 border-slate-900 bg-white rounded-full flex justify-start px-[10px] gap-4 items-center">
      <UnCheckedIcon />
      <p>성하 보고싶다</p>
    </li>
  );
}
