export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: '1',
    image: '/EL-100/EL-100_front.jpg',
    name: 'EL-100',
    description: '고품질의 EL-100 제품',
    price: 10000,
  },
  {
    id: '2',
    image: '/EL-100B/EL-100B_front.jpg',
    name: 'EL-100B',
    description: '고품질의 EL-100B 제품',
    price: 15000,
  },
  {
    id: '3',
    image: '/ER-10N/ER-10N_front.jpg',
    name: 'ER-10N',
    description: '고품질의 ER-10N 제품',
    price: 20000,
  },
];
