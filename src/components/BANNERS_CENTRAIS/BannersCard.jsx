import Link from 'next/link';
import Image from 'next/image';

export default function BannersCard({props}) {
  return (
    <div
      style={{backgroundImage: `url(${props.img})`}}
      className={`relative h-[600px]  bg-no-repeat bg-cover`}
    >
      <Link
        href={props.href}
        className='bg-white active:bg-white group hover:bg-_bg transition-all border-2 hover:borde-white absolute bottom-0 right-0 p-3 gap-4 flex max-w-72'
      >
        <div className='flex flex-col'>
          <div className='text-2xl font-semibold text-_bgText group-hover:text-white'>
            {props.name}
          </div>
          <div>{props.desc}</div>
        </div>
        <div className='flex'>
          <Image src='/right.png' height={100} width={100} className='h-14 self-end' />
        </div>
      </Link>
    </div>
  );
}
