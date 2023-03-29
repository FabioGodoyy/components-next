import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { VscError } from 'react-icons/vsc';

export const ModalError = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='h-20 w-60 bg-red-500'
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        Error
      </button>
      <Transition
        show={isOpen}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
        as={Fragment}
      >
        <Dialog onClose={() => setIsOpen(false)}>
          <Dialog.Panel className='mx-auto flex h-max w-1/3 min-w-[300px] max-w-sm flex-col items-center overflow-y-auto rounded-lg bg-white px-10 py-8 shadow-2xl'>
            <Dialog.Title className='mb-8 text-center text-3xl font-bold text-stone-600'>
              Opss... Algo deu errado
            </Dialog.Title>
            <div className='mb-6 flex flex-col items-center gap-4'>
              <VscError size={80} className='animate-pulse text-red-400' />
              <p className='text-center text-lg font-semibold text-stone-500'>
                Por favor tente novamente mais tarde.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='mt-3 h-10 w-20 rounded-md bg-green-500'
            >
              OK
            </button>
            <div className='mt-5 h-[1px] w-full bg-slate-400'></div>
            <span className='text-center text-sm font-semibold text-stone-500'>
              Duvida? Entre em{' '}
              <a href='#' className='text-blue-500'>
                Contato
              </a>{' '}
              com nossa equipe.
            </span>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};
