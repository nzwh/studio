import SwapOnHover from "./effects/SwapOnHover";
import Logo from "./Logo";
import MiniSocials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between py-4">
      <div className="flex w-full items-center gap-4">
        <Logo />
        <SwapOnHover
          className="w-full text-sm font-light tracking-tighter"
          SwapOnHover="@2026 all—nights—persevered"
        >
          @2026 all—rights—reserved
        </SwapOnHover>
      </div>
      <MiniSocials />
    </footer>
  );
}
