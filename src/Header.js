import React from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';

const Header = ({title}) => {
  const {width} = useWindowSize();
  return (
    <header className='bg-black text-white p-4 flex md:flex-row items-start md:items-center justify-between text-2xl'>
        <h1 className=''>{title}</h1>
        {width < 768 ? <FaMobileAlt/>
          : width < 992 ? <FaTabletAlt/>
            : <FaLaptop/>
        }
    </header>
  )
}

export default Header