'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { SiteFooterData } from '@/contentful/footer.service'
import { ASSETS } from '@/config/assets'

const PLATFORM_ICONS: Record<string, string> = {
  facebook: ASSETS.social.facebook,
  twitter: ASSETS.social.twitter,
  instagram: ASSETS.social.instagram,
  pinterest: ASSETS.social.dribble,
  youtube: ASSETS.social.dribble,
  tiktok: ASSETS.social.dribble,
}

interface FooterProps {
  data: SiteFooterData
}

export default function Footer({ data }: FooterProps) {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubscribe() {
    if (!email) return
    setSubStatus('submitting')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, _subject: 'Newsletter Subscription' }),
    })
    if (res.ok) {
      setSubStatus('success')
      setEmail('')
    } else {
      setSubStatus('error')
    }
  }

  const marqueeItems = Array.from({ length: 6 }, (_, i) => (
    <li key={i}>
      <p className="font-[250] text-[40px] min-640:text-[50px] min-990:text-[80px] min-1400:text-[150px] min-1600:text-[200px] leading-150p text-primary-900">
        {data.marqueeText}
      </p>
    </li>
  ))

  return (
    <>
      {/* Marquee — separate from footer element, matches HTML App.jsx order */}
      <section className="marquee-start bg-cream pt-30 min-1400:pt-50">
        <div className="marquee">
          <div className="track">
            <div className="content">
              <ul className="gap-[20px] min-640:gap-[30px] min-990:gap-[50px] min-1400:gap-[100px]">
                {marqueeItems}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer relative bg-cream">
        <div className="footer-leaf-left absolute top-[45px] left-0 z-0 max-640:hidden">
          <img
            src={ASSETS.footerLeafLeft}
            alt="leaf"
            width={290}
            height={370}
            className="w-[90px] min-990:w-[180px] min-1200:w-auto"
          />
        </div>
        <div className="footer-leaf-right absolute top-[5px] right-0 z-0 max-640:hidden">
          <img
            src={ASSETS.footerLeafRight}
            alt="leaf"
            width={375}
            height={474}
            className="w-[100px] min-990:w-[200px] min-1200:w-auto"
          />
        </div>

        <div className="footer-above py-40 min-1200:py-72">
          <div className="container-1313">
            <div className="footer-above-inside">
              <div className="footer-above-details max-w-[320px] min-640:max-w-[363px] mx-auto mb-20 min-1200:mb-32">
                <div className="footer-above-icon mb-16 min-1200:mb-22">
                  <img
                    src={data.newsletterIcon ?? ASSETS.footerPlaneIcon}
                    alt="icon"
                    width={42}
                    height={42}
                    className="mx-auto"
                  />
                </div>
                <div className="footer-above-text text-center">
                  <p className="poppins-300-30">{data.newsletterHeading}</p>
                </div>
              </div>
              <div className="footer-above-form">
                {subStatus === 'success' ? (
                  <p className="text-center font-poppins text-[15px] text-black max-w-[631px] mx-auto py-10">
                    You&apos;re subscribed! Thank you.
                  </p>
                ) : (
                  <>
                    <div className="footer-form-input-box max-w-[631px] mx-auto flex justify-center">
                      <div className="footer-form-input flex-[0_0_calc(100%_-_143px)]">
                        <input
                          type="email"
                          name="email"
                          id="footer-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                          placeholder={data.newsletterInputPlaceholder}
                          className="px-14 min-640:px-[27px] py-10 w-full h-[55px] bg-white font-poppins font-regular text-[15px] leading-150p text-black tracking-[0.1px] placeholder:text-[15px] placeholder:leading-150p placeholder:text-grey-400 placeholder:tracking-[0.1px]"
                        />
                      </div>
                      <button
                        onClick={handleSubscribe}
                        disabled={subStatus === 'submitting'}
                        className="footer-form-subscribe-btn group flex-[0_0_120px] min-640:flex-[0_0_143px] flex items-center justify-center gap-[11px] p-6 cursor-pointer bg-white relative after:content-[''] after:absolute after:w-[1px] after:h-[29px] after:top-50p after:left-0 after:translate-y-50mp after:bg-secondary-800 disabled:opacity-60"
                      >
                        <img
                          src={ASSETS.footerSubscribeIcon}
                          alt="icon"
                          width={16}
                          height={13}
                          className="flex-[0_0_16px]"
                        />
                        <p className="text-left font-poppins font-normal text-[13px] leading-120p text-primary-500 tracking-[0.5px] transition-all duration-300 ease-in-out group-hover:text-black">
                          {subStatus === 'submitting' ? 'Sending...' : data.newsletterButtonLabel}
                        </p>
                      </button>
                    </div>
                    {subStatus === 'error' && (
                      <p className="text-center mt-8 text-14 text-red-600">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <div className="footer-form-agreement flex items-center justify-center mt-20 min-1200:mt-32">
                      <input
                        type="checkbox"
                        name="agree"
                        id="footer-agree"
                        className="invisible w-0 h-0"
                      />
                      <label
                        htmlFor="footer-agree"
                        className="text-14 leading-[157.143%] text-secondary-900"
                      >
                        {data.privacyPolicyText}
                        <Link
                          href={data.privacyPolicyUrl}
                          className="leading-100p underline hover:text-black"
                        >
                          {data.privacyPolicyLabel}
                        </Link>
                      </label>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-below">
          <div className="container-1313">
            <div className="footer-below-inside py-30 min-1200:py-40 border-t-[1px] border-solid border-[rgba(173,_157,_114,_0.5)]">
              <div className="footer-below-divs flex flex-wrap flex-col min-1200:flex-row min-1200:justify-between items-center gap-20">
                <div className="footer-copyright">
                  <p className="text-black leading-150p">{data.copyrightText}</p>
                </div>
                <div className="footer-menu">
                  <ul className="flex flex-wrap flex-col min-640:flex-row items-center justify-center gap-x-12 gap-y-6">
                    {data.footerNavLinks.map((item) => (
                      <li key={item.id} className="leading-150p">
                        <Link
                          href={item.slug}
                          className="leading-150p text-black hover:text-secondary-800"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="social-icons">
                  <ul>
                    {data.socialLinks.map((item) => (
                      <li key={item.platform}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.accessibleLabel}
                        >
                          <img
                            src={PLATFORM_ICONS[item.platform] ?? ASSETS.social.dribble}
                            alt={item.accessibleLabel}
                            width="auto"
                            height="auto"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
