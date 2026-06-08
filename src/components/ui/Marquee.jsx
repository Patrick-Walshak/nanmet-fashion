const WORDS = ['Bespoke Tailoring', '·', 'Handcrafted', '·', 'Custom Fit', '·', 'Luxury Fabrics', '·', 'Made for You', '·']
const REPEATED = [...WORDS, ...WORDS, ...WORDS]

export default function Marquee() {
  return (
    <div className="bg-black overflow-hidden py-3.5 whitespace-nowrap select-none">
      <div
        className="inline-block animate-[marquee_24s_linear_infinite]"
        style={{ animation: 'marquee 24s linear infinite' }}
      >
        {REPEATED.map((w, i) => (
          <span key={i} className="text-gold text-xs tracking-[0.22em] uppercase mx-8">{w}</span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </div>
  )
}
