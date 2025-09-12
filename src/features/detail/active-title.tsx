import CheckeIcon from '@/assets/check.svg';

interface ActiveTitleProps {
  title?: string;
}

export default function ActiveTitle({title}: ActiveTitleProps) {
  return (
    <section className="border-2 border-slate-900 w-full xl:w-[992px] h-15 rounded-3xl bg-violet-200 flex items-center justify-center gap-4">
      <CheckeIcon />
      <p className="underline underline-offset-1 font-bold text-xl">{title}</p>
    </section>
  );
}
