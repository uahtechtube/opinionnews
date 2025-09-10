import * as React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
  >
    <defs>
      <linearGradient id="logo-gradient-orange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
      </linearGradient>
       <linearGradient id="logo-gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#16a34a' }} />
        <stop offset="100%" style={{ stopColor: '#4ade80' }} />
      </linearGradient>
    </defs>
    <g transform="translate(5,5) scale(0.9)">
        <path
        d="M 50,5 C 25.1,5 5,25.1 5,50 C 5,61.9 9.8,72.5 17.5,80.2 L 17.5,80.2 L 35,62.7 C 32.2,59.9 30,55.1 30,50 C 30,38.9 38.9,30 50,30 C 55.1,30 59.9,32.2 62.7,35 L 80.2,17.5 C 72.5,9.8 61.9,5 50,5 Z"
        fill="hsl(var(--primary))"
        />
        <path
        d="M 80.2,82.5 C 87.9,74.8 92.5,64.2 92.5,50 C 92.5,26.4 73.6,7.5 50,7.5 L 50,7.5 L 50,30 C 61.1,30 70,38.9 70,50 C 70,55.1 67.8,59.9 65,62.7 L 82.5,80.2 L 80.2,82.5 Z"
        fill="hsl(var(--accent))"
        />
        <path
        d="M 20 95 C 10 85, 15 70, 20 60 L 50 80 L 20 95 Z"
        fill="#059669"
        />
        <path
        d="M 50 80 L 80 60 C 85 70, 90 85, 80 95 L 50 80 Z"
        fill="#14532d"
        />
        <path
        d="M35 75 L 35 55 C 35 52, 38 50, 40 50 L 50 50 L 50 65 L 40 75 L 35 75 Z"
        fill="#16a34a"
        />
        <path
        d="M65 75 L 65 55 C 65 52, 62 50, 60 50 L 50 50 L 50 65 L 60 75 L 65 75 Z"
        fill="#15803d"
        />
        <circle cx="50" cy="45" r="12" fill="url(#logo-gradient-green)" />
        <path d="M 47 48 L 50 42 L 53 48 L 51 48 L 51 52 L 49 52 L 49 48 Z" fill="white" />
    </g>
  </svg>
)
