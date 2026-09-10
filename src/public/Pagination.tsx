'use client';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className='flex justify-center gap-2 py-10'>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`h-9 w-9 rounded text-sm font-medium transition-colors ${n === page ? 'bg-[#1b2340] text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}
        >
          {n}
        </button>
      ))}
    </div>
  );
}
