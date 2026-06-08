import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useReveal } from '../hooks/useReveal'
import { BRAND } from '../data/content'

// Replace these with your real EmailJS credentials
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const FIELDS = [
  { name: 'from_name',  placeholder: 'Your full name',             type: 'text'  },
  { name: 'from_email', placeholder: 'Email address',              type: 'email' },
  { name: 'phone',      placeholder: 'Phone / WhatsApp (optional)',type: 'text'  },
  { name: 'occasion',   placeholder: 'Type of garment / occasion', type: 'text'  },
]

export default function Contact() {
  const formRef = useRef(null)
  const leftRef = useReveal()
  const rightRef = useReveal()

  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [values, setValues] = useState({ from_name:'', from_email:'', phone:'', occasion:'', message:'' })

  const handleChange = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setValues({ from_name:'', from_email:'', phone:'', occasion:'', message:'' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="min-h-screen px-8 md:px-16 pt-36 pb-24 grid md:grid-cols-2 gap-16 md:gap-24 items-start">
      {/* Left */}
      <div ref={leftRef} className="reveal">
        <span className="section-label">Get in touch</span>
        <span className="gold-line" />
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-black leading-snug mb-6">
          Let's create something <em className="text-taupe">beautiful</em>
        </h1>
        <p className="text-taupe leading-relaxed mb-10">
          Ready to start your bespoke journey? Fill in the form and we'll get back to you
          within 24 hours to discuss your vision, timeline, and budget.
        </p>

        <div className="space-y-5 mb-10">
          <div className="flex items-center gap-4">
            <span className="block w-8 h-px bg-gold flex-shrink-0" />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-taupe mb-0.5">Email</p>
              <a href={`mailto:${BRAND.email}`} className="text-sm text-black hover:text-taupe transition-colors">{BRAND.email}</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="block w-8 h-px bg-gold flex-shrink-0" />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-taupe mb-0.5">WhatsApp</p>
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g,'')}`}
                target="_blank" rel="noreferrer"
                className="text-sm text-black hover:text-taupe transition-colors"
              >
                {BRAND.whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <a href={BRAND.instagram} className="text-xs tracking-[0.2em] uppercase text-taupe hover:text-black transition-colors">Instagram</a>
          <a href={BRAND.tiktok}    className="text-xs tracking-[0.2em] uppercase text-taupe hover:text-black transition-colors">TikTok</a>
        </div>
      </div>

      {/* Right — form */}
      <div ref={rightRef} className="reveal">
        {status === 'success' ? (
          <div className="py-16 text-center">
            <span className="gold-line mx-auto" />
            <h2 className="font-serif text-2xl font-normal text-black mb-4">Message received</h2>
            <p className="text-taupe">Thank you — we'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {FIELDS.map(f => (
              <div key={f.name} className="border-b border-linen focus-within:border-gold transition-colors duration-200">
                <input
                  type={f.type}
                  name={f.name}
                  value={values[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  required={f.name !== 'phone'}
                  className="w-full py-3 bg-transparent font-sans text-sm text-black placeholder-taupe/60 outline-none"
                />
              </div>
            ))}
            <div className="border-b border-linen focus-within:border-gold transition-colors duration-200">
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Tell me about your vision…"
                rows={4}
                required
                className="w-full py-3 bg-transparent font-sans text-sm text-black placeholder-taupe/60 outline-none resize-none"
              />
            </div>
            {status === 'error' && (
              <p className="text-xs text-red-500">Something went wrong — please try again or contact via WhatsApp.</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
