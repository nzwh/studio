interface ArrayProps {
  className?: string;
  fill?: string;
  stroke?: string;
}
export default function ArrayLogo({
  className,
  fill = "transparent",
  stroke = "currentColor",
}: ArrayProps) {
  return (
    <svg
      viewBox="-40 -60 400 400"
      overflow="visible"
      fill="none"
      className={className}
    >
      <path
        d="M112.343 300C35.7741 300 0 248.235 0 197.059C0 145.882 35.7741 94.1176 112.343 94.1176C156.276 94.1176 180.753 105.882 199.582 129.412V52.9412H36.4017V0H262.343V235.294H300V294.118H199.582V264.706C180.753 288.235 156.276 300 112.343 300ZM131.172 247.059C176.987 247.059 199.582 226.471 199.582 197.059C199.582 167.647 176.987 147.059 131.172 147.059C85.3557 147.059 62.7615 167.647 62.7615 197.059C62.7615 226.471 85.3557 247.059 131.172 247.059Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
}
