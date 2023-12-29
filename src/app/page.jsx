import BANNERS_CENTRAIS from '@/components/BANNERS_CENTRAIS';
import Newsletter from '@/components/Newsletter';
import Promoções from '@/components/Promoções';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <div className='w-screen h-72 md:h-[600px] lg:h-[700px] relative'>
        <Image
          src='/bg.png'
          height={1000000}
          width={1000000}
          priority
          className='w-screen h-72 md:h-[600px] lg:h-[700px] object-cover object-center'
        />
        <div className='flex flex-col gap-2 pr-2 lg:pr-10 w-full absolute top-1/3 -translate-y-1/3'>
          <div className='font-chakra text-right  text-white font-bold text-xl md:text-5xl italic drop-shadow-_text'>
            <div>PNEUS</div>
            <div>EVOLUTION KEVLAR CHADYANG</div>
          </div>
          <div className='font-teko text-right  font-medium text-xl md:text-5xl italic'>
            <div>Levando você</div>
            <div>muito mais longe!!</div>
          </div>
        </div>
      </div>

      <BANNERS_CENTRAIS />
      <Newsletter />
      <Promoções />
    </>
  );
}
