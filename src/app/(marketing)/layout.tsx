import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { MarketingSmoothScroll } from "@/components/marketing/SmoothScroll";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingSmoothScroll>
      <Nav />
      <main>{children}</main>
      <Footer />
    </MarketingSmoothScroll>
  );
}
