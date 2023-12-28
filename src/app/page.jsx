import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center">
        <div className='font-chakra text-right text-white font-bold text-5xl italic drop-shadow-_text shadow-black'>
          <div>PNEUS</div>
          <div>EVOLUTION KEVLAR CHADYANG</div>
        </div>
      </div>

      {/* <div className='py-10 w-screen px-5 border-2 border-green-400'>
        <div className='container mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center overflow-hidden'>
            <div className="relative h-[600px] bg-[url('/bgcycle.png')] bg-no-repeat bg-cover">
              <Link
                href='#'
                className='bg-white active:bg-white group hover:bg-_bg transition-all border-2 hover:borde-white absolute bottom-0 right-0 p-3 gap-4 flex max-w-72'
              >
                <div className='flex flex-col'>
                  <div className='text-2xl font-semibold text-_bgText group-hover:text-white'>
                    ROUPAS E ACESSÓRIOS
                  </div>
                  <div>Tudo que você precisa para sua bike</div>
                </div>
                <div>{'>>'}</div>
              </Link>
            </div>
            <div className="relative h-[600px] bg-[url('/bgcycle.png')] bg-no-repeat bg-cover">
              <Link
                href='#'
                className='bg-white group hover:bg-_bg transition-all border-2 hover:borde-white absolute bottom-0 right-0 p-3 gap-4 flex max-w-72'
              >
                <div className='flex flex-col'>
                  <div className='text-2xl font-semibold text-_bgText group-hover:text-white'>
                    ROUPAS E ACESSÓRIOS
                  </div>
                  <div>Tudo que você precisa para sua bike</div>
                </div>
                <div>{'>>'}</div>
              </Link>
            </div>
            <div className="relative  h-[600px] bg-[url('/bgcycle.png')] bg-no-repeat bg-cover">
              <Link
                href='#'
                className='bg-white group hover:bg-_bg transition-all border-2 hover:borde-white absolute bottom-0 right-0 p-3 gap-4 flex max-w-72'
              >
                <div className='flex flex-col'>
                  <div className='text-2xl font-semibold text-_bgText group-hover:text-white'>
                    ROUPAS E ACESSÓRIOS
                  </div>
                  <div>Tudo que você precisa para sua bike</div>
                </div>
                <div>{'>>'}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white w-screen py-10 px-5 border-2 border-green-400'>
        <div className='container mx-auto max-w-screen-2xl'>
          <div className='flex flex-col gap-10'>
            <div className='text-2xl md:text-4xl text-center font-medium'>
              LANÇAMENTOS E PROMOÇÕES
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-3 xl:grid-cols-4 gap-4'>
              <div className='h-[500px] justify-self-center max-w-[405px] flex flex-col border border-black rounded-sm'>
                <div className='text-white inline-flex w-fit px-2 bg-_bg font-medium'>
                  LANÇAMENTO
                </div>
                <div className='flex flex-col py-3 px-4 h-full justify-between'>
                  <div className='flex flex-col gap-4'>
                    <Image
                      src='/bicycl.png'
                      alt='bic'
                      width={1000}
                      height={1000}
                      className='w-full h-40 object-contain'
                    />
                    <div className='flex flex-col gap-2'>
                      <div>
                        <div className='text-lg'>Bike TSW Jump 29"</div>
                        <div>Cinza e Branco</div>
                      </div>
                      <div className='text-_green'>
                        <div className='text-2xl font-bold'>R$ 3.690,00</div>
                        <div className='text-lg font-semibold'>12x de R$ 307,50</div>
                      </div>
                    </div>
                  </div>
                  <button className=' bg-_green text-white p-1 w-full rounded-md hover:bg-_green/80 transition-colors'>
                    COMPRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
