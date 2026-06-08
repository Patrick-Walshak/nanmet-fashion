import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const CATEGORIES = ['All', 'Gowns', 'Suits', 'Bridal', 'Casual']

const PIECES = [
  { id: 1, label: 'Ivory evening gown',   category: 'Gowns',  span: 'col-span-2', aspect: 'aspect-[16/9]' },
  { id: 2, label: 'Gold bridal lace',     category: 'Bridal', span: '',           aspect: 'aspect-[3/4]'  },
  { id: 3, label: 'Tailored wool suit',   category: 'Suits',  span: '',           aspect: 'aspect-[3/4]'  },
  { id: 4, label: 'Silk midi dress',      category: 'Casual', span: '',           aspect: 'aspect-[4/3]'  },
  { id: 5, label: 'Structured blazer',    category: 'Suits',  span: '',           aspect: 'aspect-[4/3]'  },
  { id: 6, label: 'Blush bridesmaid set', category: 'Bridal', span: '',           aspect: 'aspect-[3/4]'  },
  { id: 7, label: 'Asymmetric gown',      category: 'Gowns',  span: '',           aspect: 'aspect-[3/4]'  },
  { id: 8, label: 'Linen co-ord set',     category: 'Casual', span: 'col-span-2', aspect: 'aspect-[16/9]' },
]

function GalleryHeader() {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal pt-36 pb-12 px-8 md:px-16">
      <span className="section-label">The lookbook</span>
      <h1 className="font-serif text-5xl md:text-6xl font-normal text-black">
        Our <em className="text-taupe">collections</em>
      </h1>
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('All')
  const gridRef = useReveal()

  const filtered = active === 'All' ? PIECES : PIECES.filter(p => p.category === active)

  return (
    <>
      <GalleryHeader />
      <div className="px-8 md:px-16 pb-24">
        {/* Filter tabs */}
        <div className="flex gap-6 mb-12 border-b border-linen pb-4">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs tracking-[0.2em] uppercase pb-2 border-b-2 transition-all duration-200 bg-transparent border-none cursor-pointer
                ${active === cat ? 'text-black border-gold' : 'text-taupe border-transparent hover:text-black'}`}
              style={{ borderBottom: active === cat ? '2px solid #C9A96E' : '2px solid transparent' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="reveal grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map(item => (
            <div
              key={item.id}
              className={`group relative overflow-hidden bg-linen cursor-pointer ${item.span} ${item.aspect}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs tracking-[0.2em] uppercase text-taupe opacity-40">{item.label}</span>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <span className="text-xs tracking-[0.2em] uppercase text-cream">{item.label}</span>
                <span className="text-xs text-cream/60">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
