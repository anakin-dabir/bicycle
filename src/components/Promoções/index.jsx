import PromoçõesCard from './PromoçõesCard';

const promoçõesData = [
  {
    tag: 'LANÇAMENTO',
    name: 'Bike TSW Jump 29"',
    about: 'Cinza e Branco',
    price: 'R$ 3.690,00',
    quantity: '12x de R$ 307,50',
    imgSrc: '/bicycl.png',
  },
  {
    tag: 'LANÇAMENTO',
    name: 'Bike TSW Jump 29"',
    about: 'Cinza e Branco',
    price: 'R$ 3.690,00',
    quantity: '12x de R$ 307,50',
    imgSrc: '/bicycl.png',
  },
  {
    tag: 'LANÇAMENTO',
    name: 'Bike TSW Jump 29"',
    about: 'Cinza e Branco',
    price: 'R$ 3.690,00',
    quantity: '12x de R$ 307,50',
    imgSrc: '/bicycl.png',
  },
  {
    tag: 'LANÇAMENTO',
    name: 'Bike TSW Jump 29"',
    about: 'Cinza e Branco',
    price: 'R$ 3.690,00',
    quantity: '12x de R$ 307,50',
    imgSrc: '/bicycl.png',
  },
  {
    tag: 'PROMOÇÃO',
    name: 'Bike TSW Jump 29"',
    about: 'Cinza e Branco',
    price: 'R$ 3.690,00',
    quantity: '12x de R$ 307,50',
    imgSrc: '/bicycl.png',
  },
  {
    tag: 'PROMOÇÃO',
    name: 'Bike TSW Jump 29"',
    about: 'Cinza e Branco',
    price: 'R$ 3.690,00',
    quantity: '12x de R$ 307,50',
    imgSrc: '/bicycl.png',
  },
  {
    tag: 'PROMOÇÃO',
    name: 'Bike TSW Jump 29"',
    about: 'Cinza e Branco',
    price: 'R$ 3.690,00',
    quantity: '12x de R$ 307,50',
    imgSrc: '/bicycl.png',
  },
  {
    tag: 'PROMOÇÃO',
    name: 'Bike TSW Jump 29"',
    about: 'Cinza e Branco',
    price: 'R$ 3.690,00',
    quantity: '12x de R$ 307,50',
    imgSrc: '/bicycl.png',
  },
];

export default function Promoções() {
  return (
    <div className='bg-white w-screen py-10 px-5 '>
      <div className='container mx-auto max-w-screen-2xl'>
        <div className='flex flex-col gap-10'>
          <div className='text-2xl md:text-4xl text-center font-medium'>
            LANÇAMENTOS E PROMOÇÕES
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-3 xl:grid-cols-4 gap-4'>
            {promoçõesData.map((promoções, index) => {
              return <PromoçõesCard key={index} props={promoções} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
