"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    grecaptcha: any
  }
}

interface RecaptchaProps {
  onVerify: (token: string) => void
  onExpire?: () => void
}

export function Recaptcha({ onVerify, onExpire }: RecaptchaProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<number | null>(null)

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        widgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          callback: onVerify,
          "expired-callback": onExpire,
          theme: "dark",
        })
      }
    }

    if (window.grecaptcha) {
      loadRecaptcha()
    } else {
      const script = document.createElement("script")
      script.src = "https://www.google.com/recaptcha/api.js"
      script.async = true
      script.defer = true
      script.onload = loadRecaptcha
      document.head.appendChild(script)
    }

    return () => {
      if (widgetId.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetId.current)
      }
    }
  }, [onVerify, onExpire])

  return <div ref={recaptchaRef} />
}
