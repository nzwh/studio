export default function Divider({ type }: { type: "short" | "long" }) {
  return (
    <div
      className={`border-b border-[#f0f0f0] ${type === "short" ? "w-full" : "-mx-[calc(50vw-50%)] w-screen"}`}
    />
  );
}
