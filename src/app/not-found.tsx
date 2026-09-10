import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='mt-25 flex flex-col items-center justify-center gap-20 rounded-md border border-gray-300 bg-blue-100 py-40 shadow-[0_0_15px_rgba(0,0,0,0.15)]'>
      <h2 className='text-3xl text-gray-700'>페이지를 찾을 수 없습니다</h2>
      <Link
        href='/'
        className='rounded-md border border-gray-300 bg-[#16305A] px-5 py-3 font-bold text-white hover:bg-[#16305ac5]'
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
