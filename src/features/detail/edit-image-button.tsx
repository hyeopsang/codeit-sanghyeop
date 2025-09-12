import EditIcon from '@/assets/edit.svg';
export default function EditImageButton() {
  return (
    <>
      <label
        className="text-slate-500 text-2xl w-15 border-2 border-slate-900 bg-slate-900/50 flex justify-center items-center aspect-square rounded-full absolute bottom-3.5 right-3.5 cursor-pointer"
        htmlFor="addImage"
      >
        <EditIcon />
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
