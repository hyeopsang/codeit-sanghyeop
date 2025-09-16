// 이미지가 없을 때 렌더링되는 컴포넌트
'use client';

import ImageIcon from '@/assets/img.svg';
import PlusIcon from '@/assets/plus.svg';

interface ImageButtonProps {
  onClick: () => void;
}

export default function ImageEmpty({onClick}: ImageButtonProps) {
  return (
    <div className="w-full h-full border-dashed border-2 rounded-3xl border-slate-300 relative flex flex-col justify-center items-center bg-slate-50">
      <ImageIcon />
      <button
        type="button"
        onClick={onClick}
        className="absolute bottom-4 right-4 w-15 aspect-square flex justify-center items-center rounded-full bg-slate-200 text-slate-500 cursor-pointer hover:bg-slate-300 transition-colors"
      >
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
