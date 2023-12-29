import Image from 'next/image';

export default function PromoçõesCard({props}) {
  return (
    <div className='h-[500px] justify-self-center max-w-[405px] flex flex-col border border-black rounded-sm'>
      <div className='text-white inline-flex w-fit px-2 bg-_bg font-medium'>{props.tag}</div>
      <div className='flex flex-col py-3 px-4 h-full justify-between'>
        <div className='flex flex-col gap-4'>
          <Image
            src={props.imgSrc}
            alt={props.name}
            width={1000}
            height={1000}
            className='w-full h-40 object-contain'
          />
          <div className='flex flex-col gap-2'>
            <div>
              <div className='text-lg'>{props.name}</div>
              <div>{props.about}</div>
            </div>
            <div className='text-_green'>
              <div className='text-2xl font-bold'>{props.price}</div>
              <div className='text-lg font-semibold'>{props.quantity}</div>
            </div>
          </div>
        </div>
        <button className=' bg-_green text-white p-1 w-full rounded-md hover:bg-_green/80 transition-colors'>
          COMPRAR
        </button>
      </div>
    </div>
  );
}
