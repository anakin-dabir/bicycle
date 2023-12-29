import Link from 'next/link';
import Image from 'next/image';

const data = {
  callNumber: '11 1234-5678',
  PAGAMENTO: [
    {
      name: 'A vista ou depósito',
      methods: [
        {href: '#', imgSrc: '/barcode.png'},
        {href: '#', imgSrc: '/bancontac.png'},
        {href: '#', imgSrc: '/amazon-pay.png'},
        {href: '#', imgSrc: '/amazon-pay.png'},
        {href: '#', imgSrc: '/visa-electron.png'},
      ],
    },
    {
      name: 'Parcelamento cartões',
      methods: [
        {href: '#', imgSrc: '/visa.png'},
        {href: '#', imgSrc: '/mastercard.png'},
        {href: '#', imgSrc: '/elo.png'},
        {href: '#', imgSrc: '/american-express.png'},
      ],
    },
  ],
  SIGANOS: [
    {href: '#', imgSrc: '/facebook.png'},
    {href: '#', imgSrc: '/youtube.png'},
    {href: '#', imgSrc: '/instagram.png'},
  ],
  INSTITUCIONAL: [
    {name: 'Quem somos', href: '#'},
    {
      name: 'Fabricantes',
      href: '#',
    },
    {
      name: 'Pagamento e Envio',
      href: '#',
    },
    {
      name: 'Trocas e Devoluções',
      href: '#',
    },
    {
      name: 'Segurança e Privacidade',
      href: '#',
    },
    {
      name: 'Minha Conta',
      href: '#',
    },
    {
      name: 'Fale Conosco',
      href: '#',
    },
  ],
};

export default function Footer() {
  return (
    <>
      <div className='bg-_darkBg w-screen py-10 px-5 text-white'>
        <div className='container max-w-screen-2xl mx-auto gap-10 xl:gap-4 text-center xl:text-start flex flex-col xl:flex-row flex-wrap justify-between'>
          <div className='flex flex-col gap-2'>
            <div className='text-2xl uppercase font-medium text-_bgText'>INSTITUCIONAL</div>
            <div className='flex flex-col text-lg'>
              {data.INSTITUCIONAL.map((link, index) => {
                return (
                  <Link key={index} href={link.href}>
                    <p className='hover:text-_bgText transition-colors'>{link.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='flex flex-col gap-10 max-w-96 mx-auto'>
            <div className='flex flex-col gap-2 '>
              <div className='text-2xl uppercase font-medium text-_bgText'>ATENDIMENTO</div>
              <div className='flex  flex-col  text-lg'>
                Dúvidas sobre cadastro, pedidos, formas de pagamento e prazo de entrega?
              </div>
              <div className='text-2xl text-_bgText'>Ligue para: {data.callNumber} ou</div>
              <Link href='#'>
                <p className='underline text-xl hover:text-_bg'>Tire aqui suas dúvidas</p>
              </Link>
            </div>
            <div className='flex flex-col gap-2 '>
              <div className='text-2xl uppercase font-medium text-_bgText'>TELEVENDAS</div>
              <Link href='#'>
                <p className='underline text-xl hover:text-_bg'>Acompanhe seus pedidos</p>
              </Link>
              <Link href='#'>
                <p className='underline text-xl hover:text-_bg'>Editar cadastro</p>
              </Link>
              <div className='flex  flex-col  text-lg'>
                Horário de funcionamento: Segunda a sexta-feira 09:00 às 17:00 Sábados 9:00h às
                13:00h
              </div>
              <div className='text-2xl text-_bgText'>Ligue para: {data.callNumber} ou</div>
            </div>
          </div>

          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
              <div className='text-2xl uppercase font-medium text-_bgText'>FORMAS DE PAGAMENTO</div>
              <div className='flex flex-col gap-5 self-center'>
                {data.PAGAMENTO.map((payment, index) => {
                  return (
                    <div key={index}>
                      <div className='text-lg'>{payment.name}</div>
                      <div className='flex gap-4 self-center'>
                        {payment.methods.map((method, index) => {
                          return (
                            <Link key={index} href={method.href}>
                              <Image
                                src={method.imgSrc}
                                height={100}
                                width={100}
                                className='h-10 w-10'
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-2xl uppercase font-medium text-_bgText'>SIGA-NOS</div>
              <div className='flex gap-4  self-center xl:self-start'>
                {data.SIGANOS.map((siganos, index) => {
                  return (
                    <Link href={siganos.href} key={index}>
                      <Image src={siganos.imgSrc} height={100} width={100} className='h-8 w-8' />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-_bg flex py-6 px-5 text-xl font-medium'>
        <div className='container text-center mx-auto gap-4 max-w-screen-2xl flex flex-col lg:flex-row justify-between'>
          <div className='flex gap-2 justify-center items-center'>
            <Image src='/tick.png' width={1000} height={1000} className='h-10 w-10' />
            <div>Site seguro</div>
          </div>
          <div>Todos os direitos reservados - Ciclo Femandes</div>
        </div>
      </div>
    </>
  );
}
