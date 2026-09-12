import Link from 'next/link';
import HeaderMenu from './HeaderMenu';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between bg-[#0E2447] md:grid md:grid-cols-[1fr_auto_1fr]'>
      <Link href='/' className='flex items-center gap-2 text-white'>
        <span className='px-8'>
          <Image src='/DNT_logo_white.png' alt='logo' width={110} height={100} />
        </span>
      </Link>

      <div className='px-8 py-3'>
        <HeaderMenu />
      </div>

      <div className='hidden md:block' />
    </header>
  );
}
