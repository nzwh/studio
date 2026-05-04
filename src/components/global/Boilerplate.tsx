import Divider from "./Divider";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface BoilerplateProps {
  children: React.ReactNode;
  dividers?: boolean;
  className?: string;
}
export default function Boilerplate({
  children,
  dividers = true,
  className = "",
}: BoilerplateProps) {
  return (
    <main
      className="mx-auto flex min-h-svh w-200 flex-col items-center px-6 pt-16 max-md:w-full"
      data-gramm="false"
    >
      <div className="fixed inset-x-0 top-0 z-10 flex w-full flex-col items-center bg-[#ffffff]/90 px-6 backdrop-blur-xs">
        <Navbar />
        <Divider type="long" />
      </div>

      {dividers && <Divider direction="vertical" />}
      <div className={className}>{children}</div>
      <Divider type="long" />
      <Footer />
    </main>
  );
}
