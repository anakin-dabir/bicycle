export default function Newsletter() {
  return (
    <div className='w-screen bg-_darkBg absolute mt-96 py-10 text-_greenText'>
      <div className='container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-14 lg:flex-row'>
        <div className='flex flex-col justify-center xl:flex-row items-center gap-2'>
          <span className='text-3xl uppercase'>NEWSLETTER</span>
          <span className='text-3xl hidden xl:inline-block'>-</span>
          <span className='text-lg text-center'>
            Cadastre-se, ganhe descontos e receba nossas promoções
          </span>
        </div>
        <div className='w-full max-w-96 relative text-black'>
          <input
            type='text'
            placeholder='SEU EMAIL'
            className='rounded-md bg-white py-1 pl-3 pr-12 h-11 w-full'
          />
          <button className='absolute right-0 px-4 h-full hover:bg-_bg transition-colors rounded-r-md'>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
