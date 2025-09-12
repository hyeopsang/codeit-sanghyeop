import UnCheckedIcon from '@/assets/unchecked.svg';

interface DeActiveTitleProps {
  title?: string;
}

export default function DeActiveTitle({title}: DeActiveTitleProps) {
  return (
    <section className="border-2 border-slate-900 w-full xl:w-[992px] h-15 rounded-3xl bg-white flex items-center justify-center gap-4">
      <UnCheckedIcon />
      <p className="underline underline-offset-1 font-bold text-xl">{title}</p>
    </section>
  );
}
