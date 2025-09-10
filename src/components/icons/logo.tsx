import * as React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
  >
    <g transform="translate(5,5) scale(0.9)">
        <path
        d="M 50,5 C 25.1,5 5,25.1 5,50 C 5,74.9 25.1,95 50,95 C 74.9,95 95,74.9 95,50 C 95,25.1 74.9,5 50,5 Z"
        fill="hsl(var(--primary))"
        />
        <path
        d="M 50,15 C 30.7,15 15,30.7 15,50 C 15,69.3 30.7,85 50,85 C 69.3,85 85,69.3 85,50 C 85,30.7 69.3,15 50,15 Z"
        fill="hsl(var(--background))"
        />
        <path
        d="M 50 25 A 25 25 0 0 1 75 50 L 50 50 Z"
        fill="hsl(var(--accent))"
        />
        <path
        d="M 50 25 A 25 25 0 0 0 25 50 L 50 50 Z"
        fill="hsl(var(--primary))"
        />
         <path
        d="M 50 75 A 25 25 0 0 1 25 50 L 50 50 Z"
        fill="hsl(var(--accent))"
        opacity="0.5"
        />
        <path
        d="M 50 75 A 25 25 0 0 0 75 50 L 50 50 Z"
        fill="hsl(var(--primary))"
        opacity="0.5"
        />
    </g>
  </svg>
)
