'use client'

import { useEffect, useState } from 'react'

type thisType = () => React.ReactNode
/**
 * 画面上部へスクロールするパーツ
 * 200px以上スクロールした時に、右下に固定配置
 */
export const ScrollToTop: thisType = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <style>
        {`@keyframes fadeup {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            80% {
              opacity: 0.9;
            }
            100% {
              opacity: 0.9;
              transform: translateY(0);
            }
          }
          @keyframes fadedown {
            0% {
              transform: translateY(0);
              opacity: 0.9;
            }
            100% {
              transform: translateY(30px);
              opacity: 0;
            }
          }
          .btn {
            background-color: #ffffff;
          }
          .btn:hover {
            background-color: #e5e5e5;
          }`}
      </style>
      <button
        onClick={scrollToTop}
        aria-label="ページの先頭へスクロール"
        className="btn"
        style={{
          animation: isVisible ? 'fadeup 0.3s forwards' : 'fadedown 0.3s forwards',
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          padding: '0.5rem',
          display: 'inline-flex',
          height: '3rem',
          width: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          borderWidth: '1px',
          borderColor: '#d4d4d8',
          transition: 'all 0.3s ease'
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: '1.25rem',
            width: '1.25rem',
            color: '#525252'
          }}
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            transform="rotate(-90 7.5 7.5)"
          ></path>
        </svg>
      </button>
    </>
  )
}
