// todo 추가 버튼 컴포넌트
import PlusIcon from '@/assets/plus.svg';
import Button from '@/components/button';

export default function AddButton() {
  return (
    <Button type="submit" className="text-slate-900">
      <PlusIcon />
      <p className="font-bold md:block hidden">추가하기</p>
    </Button>
  );
}
