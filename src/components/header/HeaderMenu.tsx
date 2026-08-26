'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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
      { label: '도어락', href: '/products/doorlock' },
      { label: '악세사리', href: '/products/accessory' },
    ],
  },
  { id: 'contact', label: '고객 문의', type: 'link', href: '/contact' },
];

export default function HeaderMenu() {
  const [openId, setOpenId] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenId(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef} className='flex items-center gap-8'>
      {MENU_ITEMS.map((item) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setOpenId(null)}
              className='text-sm text-gray-200 hover:text-white active:text-white'
            >
              {item.label}
            </Link>
          );
        }

        const isOpen = openId === item.id;

        return (
          <div key={item.id} className='relative'>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className='text-sm text-gray-200 hover:text-white active:text-white'
            >
              {item.label}
            </button>
            {isOpen && (
              <ul className='absolute top-full right-0 z-50 mt-2 w-40 rounded-md bg-white py-2 shadow-lg'>
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={() => setOpenId(null)}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
