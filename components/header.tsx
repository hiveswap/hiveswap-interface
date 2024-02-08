import { LogoSVG } from '@/components/svgs/logo'
import Link from 'next/link'
import { Menu } from '@/components/svgs/Menu'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <header className={'h-[65px] bg-white py-3 fixed top-0 w-full z-50'}>
        <div className='container mx-auto flex items-center px-8'>
          <LogoSVG />
          <div className='ml-auto items-center gap-12 font-medium sm:flex hidden'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Community</Link>
            <Link href={'https://github.com/hiveswap'}>Github</Link>
            <Link href={'https://www.hiveswap.io/'} className={'btn-primary'}>
              Launch App
            </Link>
          </div>
          <div className={'sm:hidden block ml-auto'}>
            <Menu onClick={() => setOpen(!open)} />
          </div>
        </div>
      </header>
      <div
        className={`transition-all duration-300 fixed top-[65px] w-full min-h-[40px] z-20 bg-white px-8 py-6 flex flex-col gap-6 items-center ${open ? '-translate-y-[400px]' : '-translate-y-0'}`}
      >
        <Link href={'/'} className={'block'}>
          Home
        </Link>
        <Link href={'/'} className={'block'}>
          Community
        </Link>
        <Link href={'https://github.com/hiveswap'} className={'block'}>
          Github
        </Link>
        <Link href={'https://www.hiveswap.io/'} className={'btn-primary block'}>
          Launch App
        </Link>
      </div>
    </div>
  )
}
