// 메모 작성 컴포넌트
interface MemoProps {
  memo: string;
}

export default function Memo({memo}: MemoProps) {
  return (
    <div className="xl:w-147 w-full h-[311px] rounded-3xl bg-center bg-[url('/images/memo.svg')] bg-repeat px-4 py-6 flex gap-2 flex-col">
      <h3 className="text-amber-900 font-extrabold text-center">Memo</h3>
      <textarea
        className="text-sm flex-1 w-full h-full break-words resize-none bg-transparent border-none box-border outline-none"
        defaultValue={memo}
        name="memo"
        placeholder="메모를 입력하세요..."
      />
    </div>
  );
}
