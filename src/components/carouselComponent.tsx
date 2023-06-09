export const CarouselComponent = () => {
  return (
    <div className='mx-auto max-w-4xl'>
      <div id='default-carousel' className='relative' data-carousel='static'>
        {/* <!-- Carousel wrapper --> */}
        <div className='relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96'>
          {/* <!-- Item 1 --> */}
          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-white dark:text-gray-800 sm:text-3xl'>
              First Slide
            </span>
            <img
              src='https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
              className='absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
              alt='...'
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
              className='absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
              alt='...'
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='https://wallpaperaccess.com/full/13642.jpg'
              className='absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
              alt='...'
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className='absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3'>
          <button
            type='button'
            className='h-3 w-3 rounded-full'
            aria-current='false'
            aria-label='Slide 1'
            data-carousel-slide-to='0'
          ></button>
          <button
            type='button'
            className='h-3 w-3 rounded-full'
            aria-current='false'
            aria-label='Slide 2'
            data-carousel-slide-to='1'
          ></button>
          <button
            type='button'
            className='h-3 w-3 rounded-full'
            aria-current='false'
            aria-label='Slide 3'
            data-carousel-slide-to='2'
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type='button'
          className='group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
          data-carousel-prev
        >
          <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10'>
            <svg
              className='h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
            <span className='hidden'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
          data-carousel-next
        >
          <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10'>
            <svg
              className='h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
            <span className='hidden'>Next</span>
          </span>
        </button>
      </div>
      <script src='https://unpkg.com/flowbite@1.4.0/dist/flowbite.js'></script>
    </div>
  );
};
