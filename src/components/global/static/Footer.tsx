import HoverText from "../effects/HoverText";
import Logo from "../Logo";
import MiniSocials from "../MiniSocials";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between py-4">
      <div className="flex w-full items-center gap-4">
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
