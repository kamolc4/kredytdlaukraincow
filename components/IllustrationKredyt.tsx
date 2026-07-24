export default function IllustrationKredyt() {
  return (
    <svg viewBox="0 0 280 220" fill="none" aria-hidden="true">
      {/* Soft circle background */}
      <circle cx="140" cy="110" r="88" fill="#e8f2fa" />

      {/* Bank building */}
      <rect x="163" y="92" width="74" height="64" rx="3" fill="white" stroke="#1d6fa4" strokeWidth="1.5" />
      <path d="M158 94 L200 72 L242 94 Z" fill="#d6eaf8" stroke="#1d6fa4" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="173" y="102" width="9" height="44" rx="1" fill="#d6eaf8" />
      <rect x="187" y="102" width="9" height="44" rx="1" fill="#d6eaf8" />
      <rect x="201" y="102" width="9" height="44" rx="1" fill="#d6eaf8" />
      <rect x="215" y="102" width="9" height="44" rx="1" fill="#d6eaf8" />
      <rect x="190" y="122" width="16" height="22" rx="2" fill="#e8f2fa" />

      {/* ID / residence document */}
      <rect x="46" y="50" width="92" height="122" rx="8" fill="white" stroke="#1d6fa4" strokeWidth="2" />
      <rect x="46" y="50" width="92" height="26" rx="8" fill="#1d6fa4" fillOpacity="0.09" />
      <rect x="46" y="68" width="92" height="8" fill="#1d6fa4" fillOpacity="0.09" />

      {/* Photo area */}
      <rect x="60" y="84" width="28" height="34" rx="4" fill="#d6eaf8" />
      <circle cx="74" cy="93" r="7" fill="#4a90c4" />
      <rect x="63" y="108" width="22" height="8" rx="4" fill="#4a90c4" />

      {/* Text lines on document */}
      <rect x="60" y="130" width="62" height="3" rx="1.5" fill="#c0d9ea" />
      <rect x="60" y="140" width="50" height="3" rx="1.5" fill="#c0d9ea" />
      <rect x="60" y="150" width="55" height="3" rx="1.5" fill="#c0d9ea" />
      <rect x="60" y="160" width="42" height="3" rx="1.5" fill="#c0d9ea" />

      {/* Approval checkmark badge */}
      <circle cx="196" cy="68" r="22" fill="#1d6fa4" />
      <path d="M186 68 l8 8 l15 -15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
