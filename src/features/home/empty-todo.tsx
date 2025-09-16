// 할 일이 없을 때 렌더링되는 컴포넌트
import Image from 'next/image';

export default function EmptyTodo() {
  return (
    <div className="w-full flex flex-col items-center gap-4 md:gap-6 justify-start">
      <picture className="relative w-30 md:w-60 aspect-square">
        <source media="(min-width: 744px)" srcSet="/images/todo-l.svg" />
        <Image
          src={'/images/todo-s.svg'}
          alt="empty image"
          fill={true}
          priority={true}
          style={{objectFit: 'contain'}}
        />
      </picture>
      <p className="font-bold text-center text-slate-400">
        할 일이 없어요.
        <br />
        TODO를 새롭게 추가해주세요!
      </p>
    </div>
  );
}
