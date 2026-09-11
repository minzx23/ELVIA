'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

type MenuItem =
  | { id: string; label: string; type: 'link'; href: string }
  | { id: string; label: string; type: 'dropdown'; children: { label: string; href: string }[] };

const MENU_ITEMS: MenuItem[] = [
  { id: 'about', label: '회사 소개', type: 'link', href: '/about' },
  {
    id: 'products',
    label: '제품 소개',
    type: 'dropdown',
    children: [
      { label: '도어락', href: '/doorlock' },
      { label: '악세사리', href: '/accessory' },
    ],
  },
  { id: 'contact', label: '고객 문의', type: 'link', href: '/contact' },
];

export default function HeaderMenu() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setOpenId(null);
    setIsMobileOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={menuRef} className='flex items-center gap-8'>
      <ul className='hidden items-center gap-[clamp(1.5rem,6vw,5rem)] md:flex'>
        {MENU_ITEMS.map((item) => {
          if (item.type === 'link') {
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={closeAll}
                  className='lg:text-md text-gray-200 hover:text-white active:text-white'
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const isOpen = openId === item.id;
          return (
            <li key={item.id} className='relative'>
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className='lg:text-md text-gray-200 hover:text-white active:text-white'
              >
                {item.label}
              </button>

              <ul
                className={`absolute top-full right-0 z-50 mt-3 w-44 origin-top-right rounded-lg border border-black/5 bg-[#16305A] py-2 shadow-xl ring-1 ring-black/5 transition-all duration-150 ease-out ${
                  isOpen
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none -translate-y-1 scale-95 opacity-0'
                }`}
              >
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={closeAll}
                      className='block px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white active:text-white'
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      {/* ── 모바일 햄버거 버튼 ── */}
      <button
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-expanded={isMobileOpen}
        aria-label='메뉴 열기'
        className='text-white md:hidden'
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ── 모바일 메뉴 ── */}
      {isMobileOpen && (
        <div className='absolute top-full left-0 z-50 w-full border-t border-white/10 bg-[#0E2447] md:hidden'>
          <ul className='flex flex-col px-8 py-4'>
            {MENU_ITEMS.map((item) => {
              if (item.type === 'link') {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className='block py-3 text-sm text-gray-200 hover:text-white active:text-white'
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = openId === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className='flex w-full items-center justify-between py-3 text-sm text-gray-200 active:text-white'
                  >
                    {item.label}
                  </button>
                  <ul
                    className={`overflow-hidden pl-4 transition-all duration-200 ease-out ${
                      isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeAll}
                          className='block py-2 text-sm text-gray-400 active:text-white'
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
