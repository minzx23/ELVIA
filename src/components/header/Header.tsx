import Link from 'next/link';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between bg-[#0E2447] px-8 py-4'>
      <Link href='/' className='flex items-center gap-2'>
        <span>로고</span>
      </Link>

      <HeaderMenu />
    </header>
  );
}
