'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { META_PIXEL_ID, trackPixel } from '@/lib/meta-pixel'

// Maps outbound conversion links to standard Meta events, so every CTA on the
// site is tracked without wiring onClick handlers into each component.
function eventForLink(href: string) {
  if (href.includes('calendly.com')) return { event: 'Lead', category: 'demo' }
  if (href.includes('wa.me')) return { event: 'Contact', category: 'whatsapp' }
  if (href.startsWith('mailto:')) return { event: 'Contact', category: 'email' }
  return null
}

export function MetaPixel() {
  useEffect(() => {
    if (!META_PIXEL_ID) return
    function handleClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest('a')
      if (!link) return
      const match = eventForLink(link.href)
      if (!match) return
      trackPixel(match.event, {
        content_name:
          link.dataset.trackLabel || link.textContent?.trim() || match.category,
        content_category: match.category,
      })
    }
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  if (!META_PIXEL_ID) return null
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
