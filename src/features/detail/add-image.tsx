'use client';
import ImageIcon from '@/assets/img.svg';
import EditImageButton from './edit-image-button';
import AddImageButton from './add-image-button';

export default function AddImage() {
  return (
    <div className="h-[311px] xl:w-[384px] w-full overflow-hidden">
      <div className="w-full h-full bg-slate-50 border-dashed border-2 rounded-3xl border-slate-300 flex justify-center items-center relative">
        <ImageIcon />
        <AddImageButton />
      </div>
    </div>
  );
}
