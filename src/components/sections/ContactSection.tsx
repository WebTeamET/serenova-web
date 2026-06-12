'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CountUp from 'react-countup'
import { mapImage } from '@/contentful/mappers'
import { ASSETS } from '@/config/assets'
import type { ContactSectionFields } from '@/types/sections'
import { buildSchema, type FormField } from '@/utils/formValidation'
import { getContactFieldIcon } from '@/components/ui/ContactFieldIcons'

interface StatItem {
  number: string
  title: string
}

const DEFAULT_FIELDS: FormField[] = [
  { id: 'name', type: 'text', label: 'Name', required: true },
  { id: 'phone', type: 'tel', label: 'Phone', required: false },
  { id: 'email', type: 'email', label: 'Email Address', required: true },
  { id: 'subject', type: 'text', label: 'Subject', required: false },
  {
    id: 'message',
    type: 'textarea',
    label: 'How can we help you? Feel free to get in touch!',
    required: false,
  },
]

export default function ContactSection(f: ContactSectionFields) {
  const image = mapImage(f.image)
  const formFields: FormField[] =
    Array.isArray(f.formFieldsJson) && (f.formFieldsJson as unknown[]).length
      ? (f.formFieldsJson as unknown as FormField[])
      : DEFAULT_FIELDS
  const stats: StatItem[] = Array.isArray(f.statsJson) ? (f.statsJson as unknown as StatItem[]) : []
  const buttonLabel = (f.formButtonLabel as string | undefined) ?? 'GET IN TOUCH'

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [agreeError, setAgreeError] = useState('')

  function clearFieldError(id: string) {
    if (errors[id])
      setErrors((prev) => {
        const n = { ...prev }
        delete n[id]
        return n
      })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    const result = buildSchema(formFields).safeParse(data)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([k, v]) => [k, v ?? []])))
      return
    }
    const agreeChecked = form.querySelector<HTMLInputElement>('#contact-agree')?.checked ?? false
    if (!agreeChecked) {
      setAgreeError('You must agree to the privacy policy before submitting.')
      return
    }
    setErrors({})
    setAgreeError('')
    setStatus('submitting')
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: new FormData(form),
    })
    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="contact-form-main relative py-60 min-1400:py-[91px]">
        <div className="conatact-leaf absolute bottom-0 min-1800:bottom-[239px] right-0 max-990:hidden">
          <Image
            src={ASSETS.contactFormLeaf}
            alt="leaf"
            width={222}
            height={282}
            className="w-[100px] min-1800:w-auto"
          />
        </div>
        <div className="container-1330">
          <div className="contact-form-section relative z-1 flex flex-col min-990:flex-row gap-y-30">
            <div className="contact-form-left min-990:flex-[0_0_55%]">
              <div className="sub-title sub-title-no-translate mb-18">
                <span className="after:!left-[16px]">{f.eyebrow as string}</span>
              </div>
              <div className="title">
                <h2
                  className="h4"
                  dangerouslySetInnerHTML={{ __html: (f.title as string) ?? '' }}
                />
              </div>
              {image && (
                <div className="contact-form-img mt-30 min-1600:mt-46">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={image.width || 700}
                    height={image.height || 560}
                    className="w-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="contact-form-right min-990:flex-[0_0_calc(45%_+_30px)] min-1600:flex-[0_0_calc(45%_+_66px)] min-990:pt-100 min-990:pb-70 min-990:-ml-30 min-1600:-ml-66">
              <form className="p-30 min-1400:p-66 bg-medium-cream" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="Contact Form Submission" />
                {status === 'success' ? (
                  <p className="font-teachers text-18 text-black py-30">
                    Thank you! Your message has been sent.
                  </p>
                ) : (
                  <>
                    {formFields.map((input, index) => (
                      <div
                        key={input.id ?? index}
                        className="contact-form-input relative mb-30 min-1400:mb-54 pl-[43px] pb-15 border-b-[1px] border-solid border-grey-400"
                      >
                        <label htmlFor={`contact-field-${input.id}`} className="sr-only">
                          {input.label}
                        </label>
                        <div className="contact-form-input-icon absolute left-0 top-0">
                          {getContactFieldIcon(input)}
                        </div>
                        {input.type === 'textarea' ? (
                          <textarea
                            id={`contact-field-${input.id}`}
                            name={input.id}
                            placeholder={input.label}
                            onChange={() => clearFieldError(input.id)}
                            className="w-full font-teachers font-normal text-16 min-768:text-18 min-1400:text-20 leading-120p text-black tracking-[1px] placeholder:font-teachers placeholder:font-normal placeholder:text-16 placeholder:min-768:text-18 placeholder:min-1400:text-20 placeholder:leading-120p placeholder:text-grey-400 placeholder:tracking-[1px] placeholder:capitalize py-[3.5px] bg-transparent resize-none"
                            rows={1}
                            aria-invalid={!!errors[input.id]?.[0]}
                          />
                        ) : (
                          <input
                            id={`contact-field-${input.id}`}
                            name={input.id}
                            type={input.type}
                            placeholder={input.label}
                            onChange={() => clearFieldError(input.id)}
                            className="w-full font-teachers font-normal text-16 min-768:text-18 min-1400:text-20 leading-120p text-black tracking-[1px] placeholder:font-teachers placeholder:font-normal placeholder:text-16 placeholder:min-768:text-18 placeholder:min-1400:text-20 placeholder:leading-120p placeholder:text-grey-400 placeholder:tracking-[1px] placeholder:capitalize py-[3.5px]"
                            aria-invalid={!!errors[input.id]?.[0]}
                          />
                        )}
                        {errors[input.id]?.[0] && (
                          <p className="mt-4 text-12 text-red-600">{errors[input.id][0]}</p>
                        )}
                      </div>
                    ))}
                    <div className="footer-form-agreement flex flex-col items-start gap-y-6">
                      <div className="flex items-center gap-x-8">
                        <input
                          type="checkbox"
                          name="agree"
                          id="contact-agree"
                          onChange={() => agreeError && setAgreeError('')}
                          className="w-4 h-4 cursor-pointer accent-secondary-900"
                        />
                        <label
                          htmlFor="contact-agree"
                          className="text-14 leading-[157.143%] text-secondary-900"
                        >
                          I agree With the site&apos;s{' '}
                          <Link
                            href={(f.privacyPolicyLink as string | undefined) ?? '/'}
                            className="leading-100p underline hover:text-black"
                          >
                            privacy policy.
                          </Link>
                        </label>
                      </div>
                      {agreeError && <p className="text-12 text-red-600">{agreeError}</p>}
                    </div>
                    {status === 'error' && (
                      <p className="mt-12 text-14 text-red-600">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <div className="contact-form-btn mt-32">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn btn-gold-simple cursor-pointer disabled:opacity-60"
                      >
                        {status === 'submitting' ? 'SENDING...' : buttonLabel}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {stats.length > 0 && (
        <section className="count-main pt-30 pb-60 min-1400:pt-16 min-1400:pb-[147px]">
          <div className="container-1330">
            <div className="count-section">
              <ul className="flex flex-wrap flex-col min-576:flex-row justify-center items-center gap-y-20 gap-x-50 min-768:gap-x-80 min-1400:gap-x-[140px]">
                {stats.map((item, index) => (
                  <li
                    key={index}
                    className="relative after:content-[''] after:absolute after:top-50p after:-right-24 min-768:after:-right-40 min-1400:after:-right-70 after:translate-y-50mp after:w-[1px] after:h-[52px] after:bg-secondary-900 last:after:hidden max-576:after:hidden"
                  >
                    <CountUp
                      start={0}
                      end={parseInt(item.number, 10) || 0}
                      duration={3}
                      className="font-teachers font-normal text-80 min-768:text-100 min-990:text-120 min-1400:text-[150px] leading-120p text-[rgba(0,_0,_0,_0.1)] tracking-[7.5px] capitalize"
                    />
                    <p className="absolute left-50p top-50p translate-50mp z-1 font-poppins font-light text-16 min-768:text-18 min-990:text-20 min-1400:text-22 leading-150p text-black tracking-[1.1px] capitalize">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
