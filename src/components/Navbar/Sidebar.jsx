'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar(props) {
  const {links, isOpen, toggleSidebar} = props;
  return (
    <div
      className={`w-72 ${
        isOpen ? '-translate-x-0' : 'translate-x-full'
      } h-screen bg-_darkBg z-50 transition-transform fixed right-0 top-0 p-4 shadow-md shadow-white/50 flex flex-col`}
    >
      <button
        onClick={toggleSidebar}
        className='self-end group hover:bg-_bg rounded-full box-center transition-colors'
      >
        <Image src='/cross.png' height={40} width={40} className='group-hover:invert' />
      </button>
      <div className='flex flex-col gap-4 mt-2'>
        <div className='box-center flex-col'>
          <div className='relative w-full'>
            <input
              type='text'
              placeholder='DIGITE PRODUTO DESEJADO...'
              className='rounded-md bg-white py-1 pl-3 w-full pr-8'
            />
            <button className='absolute h-full w-8 box-center rounded-r-md top-0 right-0 hover:bg-_bg group hover transition-all'>
              <Image
                src='/searchicon.png'
                height={100}
                width={100}
                alt='searchIcon'
                className='h-4 w-4 group-hover:invert'
              />
            </button>
          </div>
          <div className='w-full mt-4 text-white'>
            <p>BEM VINDO, </p>
            <Link href='#' className='underline hover:text-_bgText transition-colors'>
              <span>CADASTRE-SE</span>
            </Link>
            <span> OU FAÇA </span>
            <Link href='#' className='underline hover:text-_bgText transition-colors'>
              <span>SEU LOGIN</span>
            </Link>
          </div>
        </div>
        <div className='flex items-start gap-4 m-4 flex-col'>
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.href}>
                <div className='flex-row gap-4 box-center text-white hover:underline'>
                  <Image
                    src={link.src}
                    width={10000}
                    height={10000}
                    alt={link.name}
                    className={`${link.style} h-6 w-7 invert`}
                  />
                  <p>{link.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Link
        href='#'
        className='bg-_bg mt-auto box-center px-4  text-center flex-col focus:bg-_bg hover:bg-_bg/70 transition-colors'
      >
        <div>
          <Image src='/cart.png' height={1000} width={1000} className='h-10 w-10' />
        </div>
        <div>
          <p>MEU</p>
          <p>CARRINHO</p>
        </div>
      </Link>
    </div>
  );
}
