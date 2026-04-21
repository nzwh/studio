import Link from 'next/link'
import { FaXTwitter, FaBehance, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

export const SOCIALS = [
  { icon: SiGmail, href: 'mailto:notzerowh@gmail.com' },
  { icon: FaXTwitter, href: 'https://x.com/arkusgray' },
  { icon: FaInstagram, href: 'https://instagram.com/arkusgray' },
  { icon: FaGithub, href: 'https://github.com/nzwh' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/nzwh' },
  { icon: FaBehance, href: 'https://behance.net/nzwh' },
]

export default function MiniSocials() {
  return (
    <div className="flex items-center gap-1">
      {SOCIALS.map(({ icon: Icon, href }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center bg-[#f0f0f0] hover:bg-[#dadada] rounded-sm w-6 h-6 text-[#707070] hover:text-[#303030] transition-all duration-200"
        >
          <Icon size={14} />
        </Link>
      ))}
    </div>
  )
}