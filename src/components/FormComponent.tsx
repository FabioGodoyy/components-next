export const FormComponent = () => {
  return (
    <section className='mx-auto w-1/2 min-w-[300px] rounded-xl px-10 py-8 shadow-2xl'>
      <h2>Veja as Parcelas desse veículo</h2>
      <p className='mb-10'>
        Tudo sem compromisso, vamos começar com alguns dados :)
      </p>
      <form className='flex flex-col'>
        <div className='flex flex-col gap-5'>
          <div className='relative'>
            <input
              type='text'
              id='Nome'
              className='peer block w-full rounded-lg border-2 border-gray-200 bg-transparent px-4 pb-3 pt-3 text-sm text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
            />
            <label
              htmlFor='Nome'
              className='peer-focus:dark:text-blue-white peer-focus:text-slate-500-600 absolute top-2 left-3 z-10 origin-[0] -translate-y-10 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:font-bold dark:bg-gray-900 dark:text-gray-400'
            >
              Nome
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              id='email'
              className='peer block w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent px-4 pb-3 pt-3 text-sm text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
            />
            <label
              htmlFor='email'
              className='peer-focus:dark:text-blue-white peer-focus:text-slate-500-600 absolute top-2 left-3 z-10 w-max origin-[0] -translate-y-10 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:font-bold dark:bg-gray-900 dark:text-gray-400'
            >
              E-mail
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              id='telefone'
              className='peer block w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent px-4 pb-3 pt-3 text-sm text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
              placeholder=' '
            />
            <label
              htmlFor='telefone'
              className='peer-focus:dark:text-blue-white peer-focus:text-slate-500-600 absolute top-2 left-3 z-10 origin-[0] -translate-y-10 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:font-bold dark:bg-gray-900 dark:text-gray-400'
            >
              Telefone
            </label>
          </div>
        </div>
        <button className='mt-10 mb-10 h-16 w-52 rounded-xl bg-red-500 text-xl font-bold text-white'>
          Ver Parcelas
        </button>
        <div className='relative'></div>
      </form>
    </section>
  );
};
