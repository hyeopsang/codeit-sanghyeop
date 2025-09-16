// 완료된 할 일이 없을 때 렌더링되는 컴포넌트
import Image from 'next/image';

export default function EmptyDone() {
  return (
    <div className="w-full flex flex-col items-center gap-6 justify-start">
      <picture className="relative w-30 md:w-60 aspect-square">
        <source media="(min-width: 744px)" srcSet="/images/done-l.svg" />
        <Image
          src={'/images/done-s.svg'}
          alt="empty image"
          fill={true}
          priority={true}
          style={{objectFit: 'contain'}}
        />
      </picture>
      <p className="font-bold text-center text-slate-400">
        아직 다 한 일이 없어요.
        <br />
        해야 할 일을 체크해보세요!
      </p>
    </div>
  );
}
