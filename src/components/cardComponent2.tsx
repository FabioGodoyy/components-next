export const CardComponent2 = () => {
  return (
    <div className='mx-auto min-w-[320px] max-w-lg cursor-pointer overflow-hidden rounded-md shadow-lg hover:shadow-2xl'>
      <div>
        <img
          src='https://clickgarage.com.br/storage/veiculos/34871/VvmARRgHAg8E0QHgMFnazu4vVEJmkSqs.jpg'
          alt='Car image'
        />
      </div>
      <div className='flex justify-between px-8 pt-6'>
        <div>
          <p className='text-3xl font-bold'>R$ 539.000</p>
          <span className='text-stone-400'>2020</span>
          <p className='mt-4 mb-8 text-xl font-semibold'>
            Porshe 911 Carreira GTS
          </p>
        </div>
        <div>35.000 km</div>
      </div>
      <div className='flex justify-between px-8 text-stone-400'>
        <span>Usado</span>
        <span>Jundiai - SP</span>
      </div>
      <div className='mt-4 h-[1px] w-full bg-stone-200'></div>
      <div className='text-center'>
        <button className='flex w-full justify-center bg-slate-50 pt-2.5 pb-3.5 font-semibold text-sky-500'>
          Visualizar informações do veiculo
        </button>
      </div>
    </div>
  );
};
