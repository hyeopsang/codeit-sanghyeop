import Button from '@/components/button';
import XIcon from '@/assets/X.svg';

export default function DeleteButton() {
  return (
    <Button className="text-white bg-rose-500">
      <XIcon />
      <p>삭제하기</p>
    </Button>
  );
}
