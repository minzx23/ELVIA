'use client';

import Link from 'next/link';

interface ShowButtonProps {
  id: string;
  category: 'doorlock' | 'accessory';
}

export default function ShowButton({ id, category }: ShowButtonProps) {
  return (
    <Link
      href={`/products/${category}/${id}`}
      className='h-9.5 w-25 rounded-md bg-[#16305C] px-4 py-2.25 text-center text-[13px] font-semibold text-white hover:cursor-pointer hover:bg-[#0F1E3D] lg:h-7 lg:w-18.75 lg:px-2 lg:py-2 lg:text-[9px]'
    >
      자세히보기
    </Link>
  );
}
