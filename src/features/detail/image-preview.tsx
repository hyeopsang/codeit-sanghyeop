// 이미지가 있을 때 렌더링되는 컴포넌트

'use client';

import EditIcon from '@/assets/edit.svg';
import Image from 'next/image';

interface ImagePreviewProps {
  preview: string;
  onClick: () => void;
}

export default function ImagePreview({preview, onClick}: ImagePreviewProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <Image
        src={preview}
        alt="uploaded"
        fill
        style={{objectFit: 'cover'}}
        sizes="100vw"
      />
      <button
        type="button"
        onClick={onClick}
        className="absolute bottom-4 right-4 w-15 aspect-square border-2 border-slate-900 bg-slate-900/50 flex justify-center items-center rounded-full cursor-pointer hover:bg-slate-900/70 transition-colors"
      >
        <EditIcon className="text-white" />
      </button>
    </div>
  );
}
