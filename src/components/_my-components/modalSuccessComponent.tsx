import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export const ModalSuccess = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='h-20 w-60 bg-green-500'
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        Success
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
              Parabéns [Usuario]
            </Dialog.Title>
            <div className='mb-6 flex flex-col items-center gap-4'>
              <IoMdCheckmarkCircleOutline
                size={80}
                className='animate-pulse text-green-500'
              />
              <p className='text-center text-lg font-semibold text-stone-500'>
                Sua proposta foi enviada com sucesso!
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
              Agradecemos a confiança!
            </span>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};
