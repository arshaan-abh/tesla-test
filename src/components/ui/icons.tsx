import type { FC, SVGProps } from "react";

export const ArrowRight: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
    </svg>
  );
};

export const Home: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M9.02 2.84l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12z" />
      <path d="M12 17.99v-3" strokeLinecap="round" />
    </svg>
  );
};

export const Bag: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      {...otherProps}
    >
      <g strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round">
        <path
          d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67 2.68-.26 4.94 1.85 4.94 4.48v1.38"
          strokeLinecap="round"
        />
        <path d="M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22z" />
      </g>
      <path
        d="M15.496 12h.009m-7.01 0h.009"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export const Search: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 1 0 0 19z" />
      <path d="M22 22l-2-2" strokeLinecap="round" />
    </svg>
  );
};

export const More: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...otherProps}
    >
      <path d="M14 5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm0 14c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm0-7c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
    </svg>
  );
};
