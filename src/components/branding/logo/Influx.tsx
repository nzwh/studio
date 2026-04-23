interface InfluxProps {
  className?: string;
  fill?: string;
  stroke?: string;
}
export default function Influx({
  className,
  fill = "transparent",
  stroke = "currentColor",
}: InfluxProps) {
  return (
    <svg
      viewBox="0 0 400 268"
      overflow="visible"
      fill="none"
      className={className}
    >
      <path
        d="M10.604 210.885L0 268H220.828L274.214 168.049H279.699L301.273 268H362.703L337.473 165.852L400 61.5082H334.547L281.527 157.432H275.677L255.2 61.5082H193.038L217.903 158.53L186.949 210.885H137.853L167.105 57.1148H234.386L244.99 0H50.4606L39.8566 57.1148H107.137L77.8849 210.885H10.604Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
}
