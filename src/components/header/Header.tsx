import Link from 'next/link';
import HeaderMenu from './HeaderMenu';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between bg-[#0E2447]'>
      <Link href='/' className='flex items-center gap-2 text-white'>
        <span className='px-8'>
          <Image src='/DNT_logo_white.png' alt='logo' width={120} height={120} />
        </span>
      </Link>

      <div className='px-8 py-4'>
        <HeaderMenu />
      </div>
    </header>
  );
}
