'use client';

import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '../Newsletter';

const links = [
  {name: 'MARCAS', style: 'w-6 h-7', href: '#'},
  {name: 'BIKES', style: 'h-[50px] w-[50px]', href: '#'},
  {name: 'COMPONENTES', style: 'h-[50px] w-[50px]', href: '#'},
  {name: 'ACESSÓRIOS', href: '#'},
  {name: 'QUADROS', href: '#'},
  {name: 'PROMOÇÕES', href: '#'},
  {name: 'MANUTENÇÃO', href: '#'},
];
export default function Navbar() {
  return (
    <>
      <nav className='w-screen fixed bg-_darkBg flex'>
        <div className='py-3 pl-4'>
          <Image
            src='/logo.png'
            className='h-[92px] w-[182px]'
            width={1000}
            height={1000}
            alt='logoImage'
          />
        </div>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='box-center'>
            <div className='relative w-2/3'>
              <input
                type='text'
                placeholder='DIGITE PRODUTO DESEJADO...'
                className='rounded-md bg-white py-1 pl-3 w-full pr-8'
              />
              <button
                onClick={() => {
                  console.log('clicked');
                }}
                className='absolute h-full w-8 box-center rounded-r-md top-0 right-0 hover:bg-_bg group hover transition-all'
              >
                <Image
                  src='/searchicon.png'
                  height={100}
                  width={100}
                  alt='searchIcon'
                  className='h-4 w-4 group-hover:invert'
                />
              </button>
            </div>
            <div className='w-1/3 text-white'>
              <p>BEM VINDO,</p>
              <p>CADASTRE-SE OU FAÇA SEU LOGIN</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            {links.map((link, index) => {
              return (
                <Link key={index} href={link.href}>
                  <div className='flex-col box-center gap-0 text-white hover:underline'>
                    <Image
                      src={`/${link.name}.png`}
                      width={100}
                      height={100}
                      alt={link.name}
                      // className={`${link.style} h-7 w-7`}
                    />
                    <p>{link.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className='bg-_bg box-center flex-col'>
          <div>
            <Image src='/cart.png' height={1000} width={1000} className='h-10 w-10' />
          </div>
          <div>
            <p>MEU</p>
            <p>CARRINHO</p>
          </div>
        </div>
      </nav>

      <Newsletter />
    </>
  );
}
