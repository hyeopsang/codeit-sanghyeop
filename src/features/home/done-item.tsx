import CheckIcon from '@/assets/check.svg';

export default function DoneItem() {
  return (
    <li className="w-full h-[50px] border-2 border-slate-900 bg-violet-100 rounded-full flex justify-start px-[10px] gap-4 items-center">
      <CheckIcon />
      <p className="line-through">성하 보고싶다</p>
    </li>
  );
}
