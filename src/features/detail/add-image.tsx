// 이미지 추가 또는 수정 컴포넌트
'use client';
import {useRef, useState} from 'react';
import ImagePreview from './image-preview';
import ImageEmpty from './image-empty';

interface AddImageProps {
  imageUrl?: string;
}

export default function AddImage({imageUrl}: AddImageProps) {
  // 선택한 이미지 미리보기 URL 상태
  const [preview, setPreview] = useState<string>(imageUrl || '');
  // hidden input 참조
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 이미지 파일 선택 핸들러
  // - 파일 크기 5MB 이하 제한
  // - 파일 이름 영문만 허용
  // - 선택 후 미리보기 업데이트
  const handleFileSelect = () => {
    const input = inputRef.current;
    if (!input) return;
    const files = input.files;
    if (!files || !files[0]) return;

    const file = files[0];

    // 5MB 이하 제한
    if (file.size > 5 * 1024 * 1024) {
      alert('파일 크기는 5MB 이하만 가능합니다.');
      input.value = ''; // 선택 취소
      return;
    }

    // 영문만 허용
    const fileName = file.name.split('.')[0];
    if (!/^[a-zA-Z]+$/.test(fileName)) {
      alert('파일 이름은 영문만 가능합니다.');
      input.value = '';
      return;
    }

    // 미리보기 업데이트
    setPreview(URL.createObjectURL(file));
  };

  // 버튼 클릭 시 hidden input 열기
  const triggerFileSelect = () => {
    inputRef.current?.click();
  };

  return (
    <div className="h-[311px] xl:w-[384px] w-full overflow-hidden rounded-3xl relative">
      {preview ? (
        // 이미지가 있을 때: 미리보기 + 수정 버튼
        <ImagePreview preview={preview} onClick={triggerFileSelect} />
      ) : (
        // 이미지가 없을 때: 빈 상태 + 추가 버튼
        <ImageEmpty onClick={triggerFileSelect} />
      )}

      {/* 실제 파일 선택 input (hidden) */}
      <input
        type="file"
        name="image"
        ref={inputRef}
        style={{display: 'none'}}
        onInput={handleFileSelect}
      />
    </div>
  );
}
