import { BRAND } from '../../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black text-cream border-t border-white/10 px-8 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p className="font-serif text-xl tracking-[0.12em]">{BRAND.name}</p>
        <p className="text-xs tracking-[0.2em] uppercase text-white/30 mt-1">{BRAND.tagline}</p>
      </div>
      <div className="flex gap-8">
        <a href={BRAND.instagram} className="text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white/80 transition-colors">Instagram</a>
        <a href={BRAND.tiktok}    className="text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white/80 transition-colors">TikTok</a>
        <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g,'')}`}
           className="text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white/80 transition-colors">WhatsApp</a>
      </div>
      <p className="text-xs text-white/25">&copy; {year} {BRAND.name}. All rights reserved.</p>
    </footer>
  )
}
