interface CassetteShapeProps {
  className?: string;
  fill?: string;
  stroke?: string;
}
export default function CassetteShape({
  className,
  fill = "transparent",
  stroke = "currentColor",
}: CassetteShapeProps) {
  return (
    <svg
      viewBox="0 0 672 264"
      overflow="visible"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_i_149_1284)">
        <path
          d="M0 8C0 3.58172 3.58172 0 8 0H200.059C206.424 0 212.529 2.52856 217.029 7.02944L222.971 12.9706C227.471 17.4714 233.576 20 239.941 20H427.079C432.223 20 437.231 18.3472 441.365 15.2854L455.635 4.71463C459.769 1.65276 464.777 0 469.921 0H664C668.418 0 672 3.58172 672 8V45C672 47.7614 669.761 50 667 50C664.239 50 662 52.2386 662 55C662 57.7614 664.239 60 667 60C669.761 60 672 62.2386 672 65V256C672 260.418 668.418 264 664 264H8.00001C3.58173 264 0 260.418 0 256V65C0 62.2386 2.23858 60 5 60C7.76142 60 10 57.7614 10 55C10 52.2386 7.76142 50 5 50C2.23858 50 0 47.7614 0 45V8Z"
          strokeLinejoin="round"
          strokeLinecap="round"
          paintOrder="stroke fill"
          fill={fill}
          stroke={stroke}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_149_1284"
          x="-1"
          y="-21"
          width="674"
          height="286"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-20" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_149_1284"
          />
        </filter>
      </defs>
    </svg>
  );
}
