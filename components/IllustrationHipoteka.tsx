export default function IllustrationHipoteka() {
  return (
    <svg viewBox="0 0 280 220" fill="none" aria-hidden="true">
      {/* Soft rounded-rect background */}
      <rect x="22" y="14" width="234" height="192" rx="18" fill="#e8f2fa" />

      {/* House roof */}
      <path d="M48 112 L113 60 L178 112 Z" fill="#d6eaf8" stroke="#1d6fa4" strokeWidth="2" strokeLinejoin="round" />

      {/* House body */}
      <rect x="60" y="112" width="106" height="78" rx="4" fill="white" stroke="#1d6fa4" strokeWidth="2" />

      {/* Windows */}
      <rect x="68" y="122" width="24" height="20" rx="2" fill="#d6eaf8" stroke="#4a90c4" strokeWidth="1" />
      <rect x="136" y="122" width="24" height="20" rx="2" fill="#d6eaf8" stroke="#4a90c4" strokeWidth="1" />

      {/* Door */}
      <rect x="99" y="150" width="28" height="40" rx="3" fill="#e8f2fa" stroke="#1d6fa4" strokeWidth="1.5" />

      {/* Credit document (right side) */}
      <rect x="187" y="62" width="65" height="90" rx="6" fill="white" stroke="#1d6fa4" strokeWidth="1.5" />
      <rect x="198" y="76" width="43" height="3" rx="1.5" fill="#1d6fa4" fillOpacity="0.38" />
      <rect x="198" y="88" width="43" height="2.5" rx="1.25" fill="#c0d9ea" />
      <rect x="198" y="97" width="35" height="2.5" rx="1.25" fill="#c0d9ea" />
      <rect x="198" y="106" width="40" height="2.5" rx="1.25" fill="#c0d9ea" />
      <rect x="198" y="115" width="30" height="2.5" rx="1.25" fill="#c0d9ea" />
      <line x1="198" y1="136" x2="242" y2="136" stroke="#c0d9ea" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* Shield / guarantee badge */}
      <path
        d="M192 154 L224 154 L224 172 Q224 185 208 190 Q192 185 192 172 Z"
        fill="#d6eaf8"
        stroke="#1d6fa4"
        strokeWidth="1.5"
      />
      <path d="M200 171 l7 7 l11 -11" stroke="#1d6fa4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
