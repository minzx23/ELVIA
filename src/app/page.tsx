import ProductCard from '@/components/product/ProductCard';
import BannerButton from '@/components/ui/BannerButton';
import HighlightText from '@/components/ui/HighlightText';
import { banner, company } from '@/data/content';
import { products } from '@/data/product';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col gap-4 bg-[#97b1db] px-16 py-8'>
        <h1 className='text-[24px] font-bold text-white md:text-[30px] lg:text-[25px]'>
          <HighlightText text={banner.title} highlight={banner.titleHighlight} />
        </h1>
        <p className='text-[14px] text-white md:text-[14.5px] lg:text-[13.5px]'>
          <HighlightText
            text={banner.description}
            highlight={banner.descriptionHighlight}
            after={banner.description2}
          />
        </p>
        <BannerButton />
      </div>

      <div className='flex flex-col'>
        <div className='flex items-center justify-between px-16 py-8 lg:py-4'>
          <h3 className='text-[19px] font-bold md:text-[22px] lg:text-[19px]'>주요 제품</h3>
          <div className='flex items-center gap-1 text-gray-400 hover:cursor-pointer'>
            <Link href='/product' className='text-[12px]'>
              전체보기
            </Link>
            <ChevronRight size={14} />
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-4 px-8'>
          {products
            .filter((product) => product.isHome)
            .map((product) => (
              <ProductCard
                key={product.id}
                image={product.images[0]}
                name={product.name}
                description={product.description}
              />
            ))}
        </div>
      </div>

      <hr className='mx-8 mt-6 border-gray-200' />

      <div className='flex px-16 py-8 lg:py-4'>
        <div className='flex min-w-0 flex-1 flex-col gap-1'>
          <h3 className='text-[19px] font-bold md:text-[22px] lg:text-[19px]'>회사 소개</h3>
          <p className='text-[12px]'>{company.desciption}</p>
        </div>
        <div className='flex min-w-0 flex-1 items-center justify-center'>
          <Image src='/ELVIA_logo.png' width={200} height={200} alt='' />
        </div>
        <div className='flex min-w-0 flex-1'>
          <h3 className='text-[19px] font-bold md:text-[22px] lg:text-[19px]'>고객 지원</h3>
        </div>
      </div>
    </div>
  );
}
