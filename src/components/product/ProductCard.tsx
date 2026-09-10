'use client';

import Image from 'next/image';
import ShowButton from '../ui/ShowButton';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price?: number;
  variant?: 'home' | 'detail';
  category: 'doorlock' | 'accessory';
}

export default function ProductCard({
  id,
  image,
  name,
  description,
  price,
  variant = 'home',
  category,
}: ProductCardProps) {
  return (
    <div>
      {variant === 'home' ? (
        <div className='flex flex-col gap-5 rounded-md border border-gray-300 px-5.25 py-6.25 lg:max-w-75 lg:gap-2 lg:py-4'>
          <Image
            src={image}
            alt='product'
            width={270}
            height={168}
            className='self-center md:w-77 lg:h-auto lg:w-50'
          />
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] font-bold lg:text-[14px]'>{name}</p>
            <p className='text-[13px] lg:text-[12px]'>{description}</p>
            <div className='flex justify-end'>
              <ShowButton id={id} category={category} />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-5 rounded-md border border-gray-300 px-5 py-10 md:gap-1 lg:w-120 lg:flex-row'>
          <Image
            src={image}
            alt='product'
            width={270}
            height={168}
            className='self-center lg:w-70'
          />
          <div className='flex flex-col gap-3'>
            <p className='text-[16px] font-bold'>{name}</p>
            <p className='text-[13px]'>{description}</p>
            {price != undefined && (
              <p className='text-[15px] font-bold'>{price.toLocaleString()}원</p>
            )}
            <div className='mt-3 flex'>
              <ShowButton id={id} category={category} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
