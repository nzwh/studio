interface SengeProps {
  className?: string;
  fill?: string;
  stroke?: string;
}
export default function SengeLogo({
  className,
  fill = "transparent",
  stroke = "currentColor",
}: SengeProps) {
  return (
    <svg
      viewBox="0 0 338 206"
      overflow="visible"
      fill="none"
      className={className}
    >
      <path
        d="M11.6426 178.283C3.56323 182.32 -3.96854 171.967 2.35867 165.522L162.509 2.3975C166.507 -1.67502 173.362 -0.371119 175.585 4.88499L206.375 77.6616C208.174 81.9134 213.188 83.7644 217.318 81.7011L326.024 27.3937C334.104 23.3574 341.636 33.7102 335.308 40.1549L175.158 203.28C171.16 207.352 164.305 206.048 162.082 200.792L131.292 128.015C129.493 123.764 124.479 121.913 120.349 123.976L11.6426 178.283Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
}
