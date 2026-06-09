import { useState } from 'react'
import Marquee from '../components/ui/Marquee'
import { useReveal } from '../hooks/useReveal'
import { SERVICES, GALLERY_ITEMS, TESTIMONIALS } from '../data/content'
import heroImg from '/public/images/hero-img.jpg'


function HeroSection() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 relative overflow-hidden">
      {/* Left */}
      <div className="flex flex-col justify-center px-8 md:px-16 pt-32 pb-20 relative z-10">
        <p className="section-label animate-[fadeUp_0.8s_0.2s_both]">
          Bespoke tailoring &amp; design
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-normal text-black mb-6 animate-[fadeUp_0.8s_0.4s_both]">
          Dressed in<br />
          <em className="text-taupe">your own</em><br />
          story
        </h1>
        <p className="text-taupe leading-relaxed max-w-md mb-10 animate-[fadeUp_0.8s_0.6s_both]">
          Every piece is crafted by hand, designed to fit your body and reflect your spirit.
          Where fashion meets artistry.
        </p>
        <div className="flex items-center gap-8 animate-[fadeUp_0.8s_0.8s_both]">
          <a href="#gallery"  className="btn-primary">View lookbook</a>
          <a href="#services" className="btn-ghost">Our services</a>
        </div>

        <div className="absolute bottom-10 left-8 md:left-16 flex items-center gap-3 animate-[fadeIn_0.8s_1.4s_both]">
          <span className="block w-10 h-px bg-gold" />
          <span className="text-xs tracking-[0.2em] uppercase text-taupe">Scroll to explore</span>
        </div>
      </div>

      {/* Right — photo placeholder */}
      <div className="hidden md:flex items-center justify-center bg-linen animate-[fadeIn_1.2s_0.3s_both]">
        <p className="font-serif text-sm text-taupe tracking-[0.2em] uppercase">
          <img src={heroImg} alt="hero" className="w-full h-full object-cover" />
        </p>
      </div>

      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      `}</style>
    </section>
  )
}

function AboutSection() {
  const ref = useReveal()
  return (
    <section id="about" className="px-8 md:px-16 py-24">
      <div ref={ref} className="reveal grid md:grid-cols-[1fr_2fr] gap-16 items-center">
        <div>
          <p className="font-serif text-8xl text-linen font-normal leading-none select-none">01</p>
        </div>
        <div>
          <span className="section-label">The story</span>
          <span className="gold-line" />
          <h2 className="font-serif text-4xl font-normal leading-snug text-black mb-6">
            Fashion is not just clothing —<br />it is <em className="text-taupe">identity</em>
          </h2>
          <p className="text-taupe leading-relaxed max-w-xl mb-8">
            Trained at one of the finest fashion academies, our designer brings a deep
            understanding of form, structure, and beauty to every piece. Each garment begins
            as a conversation — about you, your occasion, your dream.
          </p>
          <a href="#contact" className="btn-ghost">Book a consultation</a>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const headRef = useReveal()
  const gridRef = useReveal()
  return (
    <section id="services" className="bg-black px-8 md:px-16 py-24">
      <div ref={headRef} className="reveal mb-14">
        <span className="section-label text-gold">What we offer</span>
        <h2 className="font-serif text-4xl font-normal text-cream">
          Our <em className="text-gold">services</em>
        </h2>
      </div>
      <div ref={gridRef} className="reveal grid md:grid-cols-4 gap-4 max-w-7.5xl mx-auto">
        {SERVICES.map(s => (
           <div key={s.number} className="group bg-[#222220] border border-[#2e2e2c] hover:border-gold transition-colors duration-300">
  
  {/* Image at top */}
  <div className="w-full h-96 overflow-hidden bg-[#2e2e2c]">
  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
</div>

  {/* Text below */}
  <div className="p-8">
    <h3 className="font-serif text-xl text-cream mb-3">{s.name}</h3>
    <p className="text-sm leading-relaxed text-[#A09888] mb-4">{s.description}</p>
    <p className="text-xs tracking-[0.2em] uppercase text-gold">{s.price}</p>
  </div>

</div>
        ))}
      </div>
    </section>
  )
}

function TestimonialSection() {
  const [active, setActive] = useState(0)
  const ref = useReveal()
  const t = TESTIMONIALS[active]
  return (
    <section className="bg-linen px-8 md:px-16 py-24 flex flex-col items-center text-center">
      <p className="font-serif text-[7rem] leading-[0.5] text-gold opacity-20 mb-6 select-none">"</p>
      <div ref={ref} className="reveal">
        <p className="font-serif text-2xl md:text-3xl font-normal italic text-black max-w-2xl leading-relaxed mb-8">
          {t.quote}
        </p>
        <p className="text-xs tracking-[0.25em] uppercase text-taupe">
          — {t.author}, {t.location}
        </p>
        <div className="flex gap-2 justify-center mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-6 h-px transition-all duration-200 border-none cursor-pointer
                ${i === active ? 'bg-gold' : 'bg-taupe/40'}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPreview() {
  const ref = useReveal()
  return (
    <section className="px-8 md:px-16 py-24">
      <div ref={ref} className="reveal max-w-xl mx-auto text-center">
        <span className="section-label justify-center flex">Ready to begin?</span>
        <span className="gold-line mx-auto" />
        <h2 className="font-serif text-4xl font-normal text-black mb-6">
          Let's create something <em className="text-taupe">beautiful</em>
        </h2>
        <p className="text-taupe leading-relaxed mb-10">
          Send a message and we'll get back to you within 24 hours to discuss your vision.
        </p>
        <a href="/contact" className="btn-primary">Start a conversation</a>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactPreview />
    </>
  )
}