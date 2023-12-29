import Image from 'next/image';
import ResponsiveNav from './ResponsiveNav';
import Link from 'next/link';

const links = [
  {name: 'MARCAS', src: '/MARCAS.png', style: '', href: '#'},
  {name: 'BIKES', src: '/BIKES.png', style: '', href: '#'},
  {name: 'COMPONENTES', src: '/COMPONENTES.png', style: '', href: '#'},
  {name: 'ACESSÓRIOS', src: '/ACESSÓRIOS.png', href: '#'},
  {name: 'QUADROS', src: '/QUADROS.png', href: '#'},
  {name: 'PROMOÇÕES', src: '/PROMOÇÕES.png', href: '#'},
  {name: 'MANUTENÇÃO', src: '/MANUTENÇÃO.png', href: '#'},
];
export default function Navbar() {
  return (
    <>
      <nav className='w-screen  bg-_darkBg flex justify-between px-5 z-10'>
        <div className='py-3'>
          <Image
            src='/logo.png'
            className='h-[92px] w-[182px]'
            width={100}
            height={100}
            alt='logoImage'
            priority
          />
        </div>
        <ResponsiveNav links={links} />
      </nav>
    </>
  );
}
