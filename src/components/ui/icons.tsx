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

export const Cart: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      {...otherProps}
    >
      <path
        d="M1.125 4.567h2.061l.617 2.75 1.332 5.933h9.612l1.587-5.377"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.944 16.5a1.02 1.02 0 0 0 1.018-1.018 1.02 1.02 0 0 0-1.018-1.018 1.02 1.02 0 0 0-1.018 1.018A1.02 1.02 0 0 0 6.944 16.5zm6.399 0a1.02 1.02 0 0 0 1.018-1.018 1.02 1.02 0 0 0-1.018-1.018 1.02 1.02 0 0 0-1.018 1.018 1.02 1.02 0 0 0 1.018 1.018z"
        fill="currentColor"
      />
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
        <path d="M10.162 3v5.973" />
        <path d="M13.148 5.986H7.175" />
      </g>
    </svg>
  );
};

export const Transport: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      {...otherProps}
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 7h.5c.55 0 1-.45 1-1V1H3a2 2 0 0 0-1.745 1.025" />
        <path d="M1 8.5A1.5 1.5 0 0 0 2.5 10H3c0-.55.45-1 1-1s1 .45 1 1h2c0-.55.45-1 1-1s1 .45 1 1h.5A1.5 1.5 0 0 0 11 8.5V7H9.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h.645L9.29 3.005a1.01 1.01 0 0 0-.87-.505H7.5V6c0 .55-.45 1-1 1H6" />
      </g>
      <path
        d="M4 11a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm3-5v1H9.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h.645L11 6z"
        strokeLinejoin="round"
      />
      <path
        d="M1 4h3M1 5.5h2M1 7h1"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Star: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="7"
      fill="none"
      {...otherProps}
    >
      <path
        d="M6.83 3.074L5.42 4.304l.422 1.831a.5.5 0 0 1-.193.518.5.5 0 0 1-.552.024L3.5 5.709l-1.594.969a.5.5 0 0 1-.552-.024.5.5 0 0 1-.193-.518l.422-1.829-1.41-1.232a.5.5 0 0 1-.149-.533.5.5 0 0 1 .434-.344l1.858-.161.725-1.73a.5.5 0 0 1 .184-.223A.5.5 0 0 1 3.502 0a.5.5 0 0 1 .46.307l.728 1.73 1.858.161a.5.5 0 0 1 .434.344.5.5 0 0 1-.149.533H6.83z"
        fill="currentColor"
      />
    </svg>
  );
};

export const OpenBox: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      {...otherProps}
    >
      <g clipPath="url(#A)" stroke="currentColor">
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.333 5L7 2.333l3.995 2.283c.204.117.374.285.492.489s.18.434.18.669v3.119c0 .235-.062.466-.18.669s-.288.372-.492.489l-3.333 1.905c-.201.115-.429.176-.661.176s-.46-.061-.661-.176l-3.333-1.905c-.204-.117-.374-.285-.492-.489s-.18-.434-.18-.669V7.025" />
          <path d="M6.368 7.327c.194.105.411.159.632.159s.438-.055.632-.159l3.701-1.993M7 7.667V12" />
        </g>
        <path
          d="M2.333 5L7 7.667l-2 .667L.333 5.667l2-.667zM7 2.333L11.667 5 13 3.667 8.333 1 7 2.333z"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="A">
          <path fill="#FFFFFF" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Clock: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      {...otherProps}
    >
      <path
        d="M6.75 2.344a.47.47 0 0 1 .469-.469h3.562a.47.47 0 0 1 .469.469.47.47 0 0 1-.469.469H7.219a.47.47 0 0 1-.469-.469zm1.781 7.687A.47.47 0 0 0 9 10.5a.47.47 0 0 0 .469-.469V6.469A.47.47 0 0 0 9 6a.47.47 0 0 0-.469.469v3.562zM9 3.75c-3.521 0-6.375 2.854-6.375 6.375S5.479 16.5 9 16.5s6.375-2.854 6.375-6.375S12.521 3.75 9 3.75zm-5.437 6.375A5.44 5.44 0 0 1 9 4.688a5.44 5.44 0 0 1 5.438 5.438A5.44 5.44 0 0 1 9 15.563a5.44 5.44 0 0 1-5.437-5.437zm10.738-6.238a.47.47 0 0 0-.663 0 .47.47 0 0 0 0 .663l.938.938a.47.47 0 0 0 .331.137.47.47 0 0 0 .332-.137.47.47 0 0 0 .137-.332.47.47 0 0 0-.137-.332l-.937-.937z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Bell: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      {...otherProps}
    >
      <path d="M8.013 1.94c-2.207 0-4 1.793-4 4v1.927a3.19 3.19 0 0 1-.38 1.373l-.767 1.273c-.473.787-.147 1.66.72 1.953 2.873.96 5.973.96 8.847 0 .807-.267 1.16-1.22.72-1.953l-.767-1.273c-.2-.347-.373-.967-.373-1.373V5.94c0-2.2-1.8-4-4-4z" />
      <path
        d="M9.247 2.133c-.207-.06-.42-.107-.64-.133-.64-.08-1.253-.033-1.827.133.193-.493.673-.84 1.233-.84s1.04.347 1.233.84z"
        strokeLinejoin="round"
      />
      <path d="M10.013 12.707c0 1.1-.9 2-2 2-.547 0-1.053-.227-1.413-.587s-.587-.867-.587-1.413" />
    </svg>
  );
};

export const Plus: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      {...otherProps}
    >
      <path
        d="M12.667 7.333h-4v-4c0-.177-.07-.346-.195-.471S8.177 2.667 8 2.667s-.346.07-.471.195-.195.295-.195.471v4h-4c-.177 0-.346.07-.471.195s-.195.295-.195.471.07.346.195.471.295.195.471.195h4v4c0 .177.07.346.195.471s.295.195.471.195.346-.07.471-.195.195-.295.195-.471v-4h4c.177 0 .346-.07.471-.195s.195-.295.195-.471-.07-.346-.195-.471-.295-.195-.471-.195z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Trash: FC<SVGProps<SVGSVGElement>> = ({ ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M17.5 4.983l-8.35-.417c-1.65 0-3.3.083-4.95.25l-1.7.167" />
      <path d="M7.083 4.142l.183-1.092c.133-.792.233-1.383 1.642-1.383h2.183c1.408 0 1.517.625 1.642 1.392l.183 1.083m2.792 3.475l-.542 8.392c-.092 1.308-.167 2.325-2.492 2.325h-5.35c-2.325 0-2.4-1.017-2.492-2.325L4.29 7.617" />
      <path d="M8.608 13.75h2.775m-3.466-3.333h4.167" />
    </svg>
  );
};
