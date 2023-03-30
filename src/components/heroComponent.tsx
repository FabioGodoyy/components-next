export const HeroComponent = () => {
  return (
    <section className='flex h-screen w-full items-center justify-center bg-gray-200 bg-[url("https://wallpaper.dog/large/10948239.jpg")] bg-cover'>
      <div className='mx-auto flex h-max w-1/2 flex-col items-center'>
        <p className='text-center text-4xl font-bold'>
          Realize seu{' '}
          <span className=' font-extrabold text-red-500'>sonho</span>, faça uma
          busca em nosso acervo
        </p>
        <button className='mt-10 h-16 w-56 rounded-2xl bg-red-500 text-lg font-bold text-white'>
          Visualizar estoque
        </button>
      </div>
    </section>
  );
};
