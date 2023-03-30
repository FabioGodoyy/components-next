export const CTAComponent2 = () => {
  return (
    <div className=' relative max-h-[500px] w-full max-w-7xl overflow-hidden md:rounded-3xl'>
      <img src='https://wallpaper.dog/large/10948244.jpg' alt='' />
      <div className='absolute top-2 left-4 z-10 text-white md:pt-10 md:pl-10 lg:top-8 xl:top-20 xl:px-20'>
        <p className='lg:text:3xl text-2xl font-bold smx:text-4xl md:text-6xl'>
          Compre seu carro, quando quiser, de onde estiver.
        </p>
        <button className='mt-10 bg-black p-1 text-sm font-bold opacity-80 smx:mt-14 smx:p-3 md:mt-20 md:p-4 md:text-xl lg:mt-28 lg:p-10  '>
          Visualizar estoque
        </button>
      </div>
    </div>
  );
};
