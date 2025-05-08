'use client'
import { navLinks } from '@/constants'
import { AppleIcon, FacebookIcon, GuitarIcon, Music4Icon, YoutubeIcon} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavButton from './NavButton'
import { cn } from '@/lib/utils'

const socials = [
  {
    link: 'Youtube',
    icon: <YoutubeIcon />,
  },
  {
    link: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    link: 'Spotify',
    icon: < AppleIcon />
  },
  {
    link: 'Boomplay',
    icon: < GuitarIcon />
  },
]

const NavBar = () => {

 const currentPath = usePathname()

  return (
    <nav className='z-30 fixed w-full h-16 flex px-32 bg-red-400/20 justify-between items-center text-[22px]'>

        <Link href={'/'} className='flex items-center'>
        <Music4Icon /> Ateker Vibes
        </Link>

        <ul className='flex space-x-6'>
          {navLinks.map(navlink => (
            <Link className={cn({
                'text-slate-400': navlink.link === currentPath,
                'transition-colors hover:text-slate-300': true
            })} key={navlink.name} href={navlink.link}>{navlink.name}</Link>
          ))}
        </ul>

        <ul className='flex space-x-6'>
        {socials.map(social => (
          <Link className='hover:text-slate-300 transition-colors' key={social.link} href={social.link}>{social.icon}</Link>
        ))}
        </ul>

      <NavButton />
    </nav>
  )
}

export default NavBar