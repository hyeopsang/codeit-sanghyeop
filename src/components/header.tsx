// 헤더 컴포넌트
import Logo from './logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 h-15 bg-white border-b border-slate-200 z-50">
      <div className="flex justify-start items-center max-w-300 w-full mx-auto relative h-full xl:px-0 px-6">
        <Link href={'/'}>
          <Logo />
        </Link>
      </div>
    </header>
  );
}
