interface MemoProps {
  memo: string;
}

export default function Memo({memo}: MemoProps) {
  return (
    <div className="xl:w-147 w-full h-[311px] rounded-3xl bg-center bg-[url('/images/memo.svg')] bg-repeat px-4 py-6 flex flex-col">
      <h3 className="text-amber-900 font-extrabold mb-2 text-center">Memo</h3>
      <div className="flex-1 w-full overflow-y-auto">
        <p className="text-sm w-full h-full break-words">{memo}</p>
      </div>
    </div>
  );
}
