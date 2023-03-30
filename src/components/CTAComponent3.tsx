export const CTAComponent3 = () => {
  return (
    <section className='relative min-h-[400px] w-full min-w-[330px] max-w-7xl overflow-hidden bg-[url("https://toyotaofcoolsprings.com/blogs/689/wp-content/uploads/2016/05/2016-Sienna.jpg")] bg-cover'>
      <div className='absolute inset-0 z-10 bg-gradient-to-t from-slate-900'></div>
      <div className='mx-auto w-full px-4 py-20 text-left md:w-3/4 md:text-center lg:w-2/4'>
        <div className='absolute z-20 md:right-3'>
          <p className='mb-2 text-base font-semibold text-purple-700'>
            Estavamos te esperando!
          </p>
          <h2 className='mb-6 text-3xl font-extrabold tracking-tight text-white md:mb-6 md:text-4xl md:leading-tight'>
            Seu carro novo a alguns cliques de distância, não perca tempo.
            Aproveite!
          </h2>
          <div className='md:space-x-50 z-10 mb-0 space-x-1'>
            <a
              className='mb-2 inline-flex w-full items-center justify-center rounded-lg bg-purple-700 py-4 px-5 text-white sm:mb-0 sm:w-auto'
              href='#'
            >
              Viasualizar estoque
              <svg
                className='ml-1 h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
            <a
              className='mb-2 inline-flex w-full items-center justify-center rounded-lg bg-purple-700 py-4 px-5 text-white sm:mb-0 sm:w-auto'
              href='#'
            >
              Entrar em contato
              <svg
                className='ml-1 h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
