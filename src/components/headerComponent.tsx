import { MdMenu, MdClose } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCarSportSharp } from 'react-icons/io5';
import { BiHomeAlt2, BiPhone } from 'react-icons/bi';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='relative mb-10 flex h-16 w-full justify-center bg-white shadow-xl'>
      <div className='mx-auto flex w-5/6 items-center justify-between'>
        <h1 className='text-3xl'>SYNC</h1>
        <div className='hidden gap-4 md:flex'>
          <a
            href='#'
            className='text-base font-semibold text-stone-500 hover:underline'
          >
            Home
          </a>
          <a
            href='#'
            className='text-base font-semibold text-stone-500 hover:underline'
          >
            Estoque
          </a>
          <a
            href='#'
            className='text-base font-semibold text-stone-500 hover:underline'
          >
            Contato
          </a>
        </div>
        {!isOpen ? (
          <MdMenu
            size={35}
            className='md:hidden'
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        ) : (
          <MdClose
            size={35}
            className='md:hidden'
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        )}
      </div>
      <Transition
        show={isOpen}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='absolute right-0 top-14 z-30 flex h-max w-full flex-col gap-3 bg-white py-8 pl-5 pr-16 shadow-lg'>
          <a
            href='#'
            onClick={() => setIsOpen(false)}
            className='flex h-10 items-center rounded-xl pl-8 text-base font-semibold text-stone-500 hover:bg-stone-500 hover:text-white'
          >
            <BiHomeAlt2 className='mr-5' size={20} />
            Home
          </a>
          <a
            href='#'
            onClick={() => setIsOpen(false)}
            className='flex h-10 items-center rounded-xl pl-8 text-base font-semibold text-stone-500 hover:bg-stone-500 hover:text-white'
          >
            <IoCarSportSharp className='mr-5' size={20} />
            Estoque
          </a>
          <a
            href='#'
            onClick={() => setIsOpen(false)}
            className='flex h-10 items-center rounded-xl pl-8 text-base font-semibold text-stone-500 hover:bg-stone-500 hover:text-white'
          >
            <BiPhone className='mr-5' size={20} />
            Contato
          </a>
          <div className='mt-8 mb-4 h-[1px] w-full bg-slate-400'></div>

          <div className='mx-auto flex items-center gap-4'>
            <p className='relative text-base font-semibold text-stone-500 '>
              Busque seu carro novo :)
              <IoIosArrowDown
                className='absolute -right-8 top-1.5 mx-auto animate-bounce text-red-500'
                size={18}
              />
            </p>
          </div>

          <div className='relative mx-auto w-9/12'>
            <input
              type='text'
              placeholder='Ex: Volkswagen Nivus'
              className='h-12 w-full rounded-xl focus:border-red-500 focus:outline-none focus:ring-0'
            />
            <button className='absolute top-0 right-0 h-12 w-2/12 items-center rounded-r-xl bg-red-500 text-white'>
              <AiOutlineSearch size={30} className='mx-auto' />
            </button>
          </div>
        </div>
      </Transition>
    </header>
  );
};
