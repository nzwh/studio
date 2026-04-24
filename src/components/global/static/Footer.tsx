import HoverText from "../effects/HoverText";
import Logo from "../Logo";
import MiniSocials from "../MiniSocials";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-6">
      <div className="flex w-full flex-row items-center gap-4">
        <Logo />
        <HoverText
          className="w-full text-sm font-light tracking-tighter"
          hoverText="@2026 all—nights—persevered"
        >
          @2026 all—rights—reserved
        </HoverText>
      </div>
      <MiniSocials />
    </footer>
  );
}
