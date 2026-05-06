interface MonitorShapeProps {
  className?: string;
  fill?: string;
  stroke?: string;
}
export default function MonitorShape({
  className,
  fill = "transparent",
  stroke = "currentColor",
}: MonitorShapeProps) {
  return (
    <svg
      viewBox="0 0 672 360"
      overflow="visible"
      fill="none"
      className={className}
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H168H265C269.418 0 273 3.58172 273 8V12C273 16.4183 276.582 20 281 20H391C395.418 20 399 16.4183 399 12V8C399 3.58172 402.582 0 407 0H504H664C668.418 0 672 3.58172 672 8V352C672 356.418 668.418 360 664 360H8.00001C3.58173 360 0 356.418 0 352V8Z"
        fill={fill}
        stroke={stroke}
        strokeLinejoin="round"
        strokeLinecap="round"
        paintOrder="stroke fill"
      />
    </svg>
  );
}
