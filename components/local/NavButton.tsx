import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavButton = () => {
  return (
    <div className='flex justify-center items-center'>
    <Image 
    className='pr-2 rounded-full'
    src={'/assets/images/profile.png'}
    height={35}
    width={35}
    alt='image '
     />
     <Link
     className='hover:text-slate-300 transition-colors'
      href={'/account'}>
        Account
      </Link>
  </div>
  )
}

export default NavButton