import type { Metadata } from "next";
import "@/base-styles/global.scss";
import {
  HeaderDefault,
  HeaderWithRouteLinks,
} from "@/app/_global-components/Header";
import Footer from "@/app/_global-components/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-wrapper flex-layout">
      <HeaderDefault>
        <HeaderWithRouteLinks />
      </HeaderDefault>
      <main className="flex-fill-layout">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
