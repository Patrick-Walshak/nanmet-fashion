import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BRAND, NAV_LINKS } from '../../data/content'
// import fashionIcon from "../asset/images/fashion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-300
        ${scrolled ? 'py-4 bg-cream/95 border-b border-linen backdrop-blur-sm' : 'py-6 bg-transparent'}`}
    >
      {/* Logo */}
      <Link to="/" className="font-serif text-2xl tracking-[0.12em] text-black">
        {BRAND.name}
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {NAV_LINKS.map(link => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-xs tracking-[0.22em] uppercase text-black opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="/contact" className="hidden md:inline-block btn-primary text-xs py-3 px-6">
        Book a fitting
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none"
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-black transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-px bg-black transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-black transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream border-b border-linen px-8 py-6 flex flex-col gap-5 md:hidden">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.22em] uppercase text-black opacity-70 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary text-center mt-2">Book a fitting</a>
        </div>
      )}
    </nav>
  )
}
