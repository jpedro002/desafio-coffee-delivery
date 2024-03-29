export interface Product {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
  quantity: number
}

export const dataProducts: Array<Product> = [
  {
    id: '0',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
    image: '/Image-1.png',
    quantity: 1,
  },
  {
    id: '1',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
    image: '/Image-2.png',
    quantity: 1,
  },
  {
    id: '2',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    image: '/Image-3.png',
    quantity: 1,
  },
  {
    id: '3',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
    image: '/Image-4.png',
    quantity: 1,
  },
  {
    id: '4',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '/Image-5.png',
    quantity: 1,
  },
  {
    id: '5',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '/Image-6.png',
    quantity: 1,
  },
  {
    id: '6',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '/Image-7.png',
    quantity: 1,
  },
  {
    id: '7',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '/Image-8.png',
    quantity: 1,
  },
  {
    id: '8',
    title: 'Mocaccino',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    image: '/Image-9.png',
    quantity: 1,
  },
  {
    id: '9',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
    image: '/Image-10.png',
    quantity: 1,
  },
  {
    id: '10',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    image: '/Image-11.png',
    quantity: 1,
  },
  {
    id: '11',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
    image: '/Image-12.png',
    quantity: 1,
  },
  {
    id: '12',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
    image: '/Image-13.png',
    quantity: 1,
  },
  {
    id: '13',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
    image: '/Image-1.png',
    quantity: 1,
  },
]
