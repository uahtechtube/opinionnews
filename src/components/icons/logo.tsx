import Image from 'next/image';
import * as React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <Image
    src="https://i.ibb.co/37fXXxV/opinion-news-logo.png"
    alt="Opinion News Logo"
    width={100}
    height={100}
    className={props.className}
    unoptimized // Required for static image export
  />
);
