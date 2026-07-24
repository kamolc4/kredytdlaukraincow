"use client"

export default function CookieSettingsButton({ className }: { className?: string }) {
  function handleClick() {
    window.dispatchEvent(new CustomEvent("open-cookie-settings"))
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className ?? "footer__cookie-btn"}
    >
      Ustawienia cookies
    </button>
  )
}
