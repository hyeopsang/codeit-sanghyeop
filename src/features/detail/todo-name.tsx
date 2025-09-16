// 체크 on/off 및 이름 수정 컴포넌트
'use client';
import {useState} from 'react';
import UnCheckedIcon from '@/assets/unchecked.svg';
import CheckIcon from '@/assets/check.svg';
import {toggleCheck} from '@/lib/actions';

interface TodoNameProps {
  todoId: number;
  name: string;
  isCompleted: boolean;
}

export default function TodoName({todoId, name, isCompleted}: TodoNameProps) {
  // 편집 모드 상태
  const [editMode, setEditMode] = useState(false);
  // input 값 상태
  const [inputValue, setInputValue] = useState(name);

  // 체크 버튼 클릭 시 완료 상태 토글
  const onClickCheck = async () => {
    await toggleCheck(todoId, isCompleted);
  };

  return (
    <section
      className={`border-2 border-slate-900 w-full xl:w-[992px] h-15 rounded-3xl px-6 flex items-center justify-center gap-4
        ${isCompleted ? 'bg-violet-200' : 'bg-white'}`}
    >
      {editMode ? (
        // 편집 모드: 이름 수정 input
        <input
          className="w-full font-bold text-xl px-6 outline-none text-center"
          name="name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          pattern=".{1,}" // 최소 1글자 이상
          autoFocus
          required
        />
      ) : (
        <>
          {/* form 제출용 hidden input */}
          <input type="hidden" name="name" value={inputValue} />
          {/* 체크 버튼 */}
          <button type="button" onClick={onClickCheck}>
            {isCompleted ? <CheckIcon /> : <UnCheckedIcon />}
          </button>
          {/* 이름 표시, 클릭 시 편집 모드로 전환 */}
          <p
            className="underline underline-offset-1 font-bold text-xl cursor-pointer whitespace-nowrap truncate"
            onClick={() => setEditMode(true)}
          >
            {inputValue}
          </p>
        </>
      )}
    </section>
  );
}
