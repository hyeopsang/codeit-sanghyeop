// 반응형 로고 컴포넌트
import Image from 'next/image';

export default function Logo() {
  return (
    <picture className="relative block w-[71px] md:w-[151px] h-10">
      <source media="(min-width: 744px)" srcSet="/images/logo-l.svg" />
      <Image
        src={'/images/logo-s.svg'}
        alt="logo"
        fill={true}
        priority={true}
        sizes="100vw"
        style={{objectFit: 'contain'}}
      />
    </picture>
  );
}
