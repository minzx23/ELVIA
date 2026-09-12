'use client';

import Link from 'next/link';

interface ShowButtonProps {
  id: string;
  category: 'doorlock' | 'accessory';
}

export default function ShowButton({ id, category }: ShowButtonProps) {
  return (
    <Link
      href={`/${category}/${id}`}
      className='h-9.5 w-25 rounded-md bg-[#16305C] px-4 py-2.25 text-center text-[13px] font-semibold text-white hover:cursor-pointer hover:bg-[#0F1E3D] lg:h-8 lg:w-20 lg:px-3 lg:py-2 lg:text-[11px]'
    >
      자세히보기
    </Link>
  );
}
