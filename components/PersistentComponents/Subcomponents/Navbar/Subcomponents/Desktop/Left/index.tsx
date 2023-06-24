import React from 'react'
import Logo from './Logo';
import Menus from './Menus';

/**
 * the header left part for desktop view
 * @returns JSX Element
 */
const Left = () => {
  return (
    <div className='flex items-center space-x-5'>
        <Logo/>
        <Menus/>
    </div>
  )
}

export default Left;