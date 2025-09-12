import PlusIcon from '@/assets/plus.svg';

export default function AddImageButton() {
  return (
    <>
      <label
        className="text-slate-500 text-2xl w-16 flex justify-center items-center aspect-square rounded-full bg-slate-200 absolute bottom-3.5 right-3.5 cursor-pointer"
        htmlFor="addImage"
      >
        <PlusIcon />
      </label>
      <input
        id="addImage"
        type="file"
        accept="image/*"
        multiple={false}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            console.log('선택된 파일:', file);
          }
        }}
      />
    </>
  );
}
