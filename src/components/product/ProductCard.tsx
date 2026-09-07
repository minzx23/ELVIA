'use client';

import Image from 'next/image';
import ShowButton from '../ui/ShowButton';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  variant?: 'home' | 'detail';
}

export default function ProductCard({
  image,
  name,
  description,
  variant = 'home',
}: ProductCardProps) {
  return (
    <div>
      {variant === 'home' ? (
        <div className='flex flex-col gap-5 rounded-md border border-gray-300 px-5.25 py-6.25 lg:gap-2 lg:py-3'>
          <Image
            src={image}
            alt='product'
            width={270}
            height={168}
            className='self-center object-cover md:w-77 lg:h-21 lg:w-33.75'
          />
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] font-bold lg:text-[14px]'>{name}</p>
            <p className='text-[13px] lg:text-[12px]'>{description}</p>
            <div className='flex justify-end'>
              <ShowButton />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-5 rounded-md border border-gray-300 p-5 md:flex-row md:gap-6'>
          <Image src={image} alt='product' width={240} height={160} className='md:w-35 lg:w-40' />
          <div className='flex flex-col gap-3'>
            <p className='text-[16px] font-bold'>{name}</p>
            <p className='text-[13px]'>{description}</p>
            <div className='flex justify-end'>
              <ShowButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
