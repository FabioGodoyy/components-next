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
              id='name'
              placeholder=' '
              className='peer block w-full appearance-none rounded-md border-2 border-gray-200 bg-transparent pb-3 pl-4 text-sm shadow-sm focus:border-gray-500 focus:ring-0 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 peer-focus:text-slate-500'
            />
            <label
              htmlFor='name'
              className='peer-focus:base absolute left-3.5 top-0 z-10 -translate-y-2 transform bg-white px-1 text-xs text-gray-500 transition-all focus:outline-none peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:font-bold peer-disabled:bg-transparent'
            >
              Name
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              id='email'
              placeholder=' '
              className='peer block w-full appearance-none rounded-md border-2 border-gray-200 bg-transparent pb-3 pl-4 text-sm shadow-sm focus:border-gray-500 focus:ring-0 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 peer-focus:text-slate-500'
            />
            <label
              htmlFor='email'
              className='peer-focus:base absolute left-3.5 top-0 z-10 -translate-y-2 transform bg-white px-1 text-xs text-gray-500 transition-all focus:outline-none peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:font-bold peer-disabled:bg-transparent'
            >
              E-mail
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              id='telefone'
              placeholder=' '
              className='peer block w-full appearance-none rounded-md border-2 border-gray-200 bg-transparent pb-3 pl-4 text-sm shadow-sm focus:border-gray-500 focus:ring-0 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 peer-focus:text-slate-500'
            />
            <label
              htmlFor='telefone'
              className='peer-focus:base absolute left-3.5 top-0 z-10 -translate-y-2 transform bg-white px-1 text-xs text-gray-500 transition-all focus:outline-none peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:font-bold peer-disabled:bg-transparent'
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
// <div className='relative'>
//   <input
//     type='text'
//     id='telefone'
//     className='peer block w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent px-4 pb-3 pt-3 text-sm text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
//     placeholder=' '
//   />
//   <label
//     htmlFor='telefone'
//     className='peer-focus:dark:text-blue-white absolute top-2 left-3 z-10 origin-[0] -translate-y-10 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:font-bold peer-focus:text-slate-500 dark:bg-gray-900 dark:text-gray-400'
//   >
//     Telefone
//   </label>
// </div>;
