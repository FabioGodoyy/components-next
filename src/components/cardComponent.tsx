export const CardComponent = () => {
  return (
    <div>
      <div className='relative mx-auto max-w-md overflow-hidden rounded-t-lg bg-white shadow'>
        <div>
          <img
            src='https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>
        <div className='absolute inset-0 z-10 bg-gradient-to-t from-slate-900'></div>
        <div className='absolute inset-x-0 bottom-0 z-20 p-4'></div>
      </div>
      <div className='mx-auto max-w-md rounded-b-lg bg-slate-900 px-4 pb-5 shadow'>
        <time className='mt-2 text-sm text-white text-opacity-80'>
          2022 • 2023
        </time>
        <h3 className=' text-2xl font-bold text-stone-100'>
          BMW
          <span className='text-red-500'> M4</span>
        </h3>
        <p className='font-semibold text-white text-opacity-80'>Jundiai - SP</p>
        <p className='font-semibold text-white text-opacity-80'>
          3.0 COUPÉ I6 24V GASOLINA 2P AUTOMÁTICO
        </p>
        <div className='relative mt-5 flex items-center justify-center'>
          <p className='right-6 bottom-14 text-3xl font-bold text-white sm:absolute'>
            <span className='text-lg text-red-500'>R$ </span>
            520.000
          </p>
        </div>
      </div>
    </div>
  );
};
