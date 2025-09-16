// todo 삭제 버튼 컴포넌트
'use client';
import Button from '@/components/button';
import XIcon from '@/assets/X.svg';
import {deleteTodos} from '@/lib/actions';
import {useRouter} from 'next/navigation';

interface DeleteButtonProps {
  todoId: number;
}

export default function DeleteButton({todoId}: DeleteButtonProps) {
  const router = useRouter();

  // 삭제 버튼 클릭 시 호출
  const handleDeleteTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      //루트 페이지로 이동
      router.push('/');

      // 서버에 todo 삭제 요청
      const result = await deleteTodos(todoId);
      // 서버 메시지 알림
      if (result?.message) {
        alert(result.message);
      }
    } catch (error) {
      // 에러 처리
      alert('삭제 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  return (
    <Button onClick={handleDeleteTodo} className="text-white bg-rose-500">
      <XIcon />
      <p>삭제하기</p>
    </Button>
  );
}
