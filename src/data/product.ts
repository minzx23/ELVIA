export interface Product {
  id: string;
  images: string[];
  name: string;
  description: string;
  price: number;
  isHome?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    images: [
      '/EL-100/EL-100_front.png',
      '/EL-100/EL-100_side.png',
      '/EL-100/EL-100_on.png',
      '/EL-100/EL-100_inner.png',
      '/EL-100/EL-100_inner_side.png',
    ],
    name: 'EL-100',
    description: '고품질의 EL-100 제품',
    price: 10000,
    isHome: true,
  },
  {
    id: '2',
    images: [
      '/EL-100B/EL-100B_front.png',
      '/EL-100B/EL-100B_on',
      '/EL-100B/EL-100B_inner.png',
      '/EL-100B/EL-100B_inner_side.png',
      '/EL-100B/EL-100B_IO.png',
    ],
    name: 'EL-100B',
    description: '고품질의 EL-100B 제품',
    price: 15000,
    isHome: true,
  },
  {
    id: '3-1',
    images: [
      '/ER-10N/ER-10N_Black_front.png',
      '/ER-10N/ER-10N_Black_on.png',
      '/ER-10N/ER-10N_Black_open.png',
      '/ER-10N/ER-10N_Black_open_on.png',
      '/ER-10N/ER-10N_inner.png',
      '/ER-10N/ER-10N_inner_side.png',
      '/ER-10N/ER-10N_inner_side_rot.png',
    ],
    name: 'ER-10N(B)',
    description: '고품질의 ER-10N 제품',
    price: 20000,
  },
  {
    id: '3-2',
    images: [
      '/ER-10N/ER-10N_Red_front.png',
      '/ER-10N/ER-10N_Red_on.png',
      '/ER-10N/ER-10N_Red_open.png',
      '/ER-10N/ER-10N_Red_open_on.png',
      '/ER-10N/ER-10N_Red.png',
      '/ER-10N/ER-10N_inner_side.png',
      '/ER-10N/ER-10N_inner_side_rot.png',
    ],
    name: 'ER-10N(R)',
    description: '고품질의 ER-10N 제품',
    price: 20000,
    isHome: true,
  },
  {
    id: '3-3',
    images: [
      '/ER-10N/ER-10N_Silver_front.png',
      '/ER-10N/ER-10N_Silver_on.png',
      '/ER-10N/ER-10N_Silver_open.png',
      '/ER-10N/ER-10N_Silver_open_on.png',
      '/ER-10N/ER-10N_inner.png',
      '/ER-10N/ER-10N_inner_side.png',
      '/ER-10N/ER-10N_inner_side_rot.png',
    ],
    name: 'ER-10N(S)',
    description: '고품질의 ER-10N 제품',
    price: 20000,
  },
  {
    id: '4',
    images: ['/ER-10N/ER-10N_Silver_front.png'],
    name: 'EP-1000',
    description: '고품질의 EP-1000 제품',
    price: 20000,
    isHome: true,
  },
];
