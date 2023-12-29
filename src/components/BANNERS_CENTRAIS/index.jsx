import BannersCard from './BannersCard';

const BannerData = [
  {
    href: '#',
    name: 'ROUPAS E ACESSÓRIOS',
    desc: 'Tudo que você precisa para sua bike',
    img: '/bgcycle.png',
  },
  {
    href: '#',
    name: 'ROUPAS E ACESSÓRIOS',
    desc: 'Tudo que você precisa para sua bike',
    img: '/bgcycle.png',
  },
  {
    href: '#',
    name: 'ROUPAS E ACESSÓRIOS',
    desc: 'Tudo que você precisa para sua bike',
    img: '/bgcycle.png',
  },
];

export default function BANNERS_CENTRAIS() {
  return (
    <div className='py-10 w-screen px-5 '>
      <div className='container mx-auto max-w-screen-2xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center overflow-hidden'>
          {BannerData.map((banner, index) => {
            return <BannersCard props={banner} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
