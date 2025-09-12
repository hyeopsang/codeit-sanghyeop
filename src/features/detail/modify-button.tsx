import Button from '@/components/button';
import CheckingIcon from '@/assets/checking.svg';
import clsx from 'clsx';

interface ModifyButtonProps {
  isCompleted: boolean;
}

export default function ModifyButton({isCompleted}: ModifyButtonProps) {
  return (
    <Button
      className={clsx(
        'text-slate-900',
        isCompleted ? 'bg-lime-300' : 'bg-slate-200'
      )}
    >
      <CheckingIcon />
      <p>수정 완료</p>
    </Button>
  );
}
