import type { SVGProps } from 'react';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a5 5 0 0 0-5 5c0 2.064.96 4.128 2.38 5.5l-3.38 4.225A2 2 0 0 0 7 20h10a2 2 0 0 0 1.62-3.275L15.62 12.5C17.04 11.128 18 9.064 18 7a5 5 0 0 0-5-5Z" />
      <path d="M12 2c-2.32 0-4.387 1.28-5.483 3.14" />
    </svg>
  ),
};
