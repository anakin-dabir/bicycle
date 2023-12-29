'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import Sidebar from './Sidebar';

export default function ResponsiveNav({links}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(pre => !pre);
  };
  useEffect(() => {
    const handleResize = () => {
      isOpen && window.innerWidth >= 1280 && setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className='xl:hidden box-center bg-_bg h-10 w-10 rounded-full self-center group transition-all'
      >
        <Image src='/hamburger.png' width={50} height={50} className='group-hover:invert' />
      </button>

      <Sidebar links={links} isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className='hidden xl:flex gap-10 2xl:gap-40'>
        <div className='flex flex-col gap-5 py-2'>
          <div className='box-center gap-6'>
            <div className='relative w-[600px]'>
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
            <div className='text-white'>
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
          <div className='flex items-center gap-6'>
            {links.map((link, index) => {
              return (
                <Link key={index} href={link.href}>
                  <div className='flex-col box-center gap-0 text-white hover:underline'>
                    <Image
                      src={link.src}
                      width={10000}
                      height={10000}
                      alt={link.name}
                      className={`${link.style} h-6 w-7 invert`}
                      loading='lazy'
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
          className='bg-_bg box-center px-6 lg:pr-3 text-center flex-col focus:bg-_bg hover:bg-_bg/70 transition-colors'
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
    </>
  );
}
