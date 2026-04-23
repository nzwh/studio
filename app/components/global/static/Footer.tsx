import HoverText from "../effects/HoverText";
import Logo from "../Logo";
import MiniSocials from "../MiniSocials";

export default function GlobalFooter() {
  return (
    <footer className="flex justify-between items-center py-6">
      <div className="flex flex-row items-center gap-4 w-full">
        <Logo />
        <HoverText
          className="w-full font-light text-sm tracking-tighter"
          hoverText="@2026 all—nights—persevered"
        >
          @2026 all—rights—reserved
        </HoverText>
      </div>
      <MiniSocials />
    </footer>
  );
}
