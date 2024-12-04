import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/base-styles/global.scss";
import { Suspense } from "react";
import ScrollToLinkGlobalComponent from "./_global-components/ScrollToViewFeature/ScrollToLinkGlobalComponent";
import { ContentLoadingSpinner as LoadingSpinner } from "./_global-components/LoadingSpinner";
import { ToastContainer } from "react-toastify";
import scssVar from "@/base-styles/_exportValues.module.scss";
import "react-toastify/dist/ReactToastify.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

/* 
THIS LAYOUT WRAPS AND IS PARENT TO ALL ROUTES.
ANY PROVIDER OR CONTEXT YOU WANT TO DEFINE ONCE SHOULD BE HANDLED HERE.

Also any Component that should be available on all pages could be inserted here
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}
        <Suspense fallback={<LoadingSpinner width="20" height="20" />}>
          <ScrollToLinkGlobalComponent />
        </Suspense>
        <ToastContainer
          draggable
          pauseOnHover
          position="top-right"
          autoClose={5000}
        />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_LiveBaseUrl || ""),
  title: {
    template: "%s | StarzFi",
    default: "StarzFi",
  },
  themeColor: scssVar.primary,
  category: "Entertainment",
  manifest: "/manifest.json",
  keywords: [
    "Entertainment",
    "Party",
    "Celebrity",
    "Ticketing",
    "Events",
    "StarzFi",
  ],
  // appLinks: {
  //   ios: {
  //     url: 'https://nextjs.org/ios',
  //     app_store_id: 'app_store_id',
  //   },
  //   android: {
  //     package: 'com.example.android/package',
  //     app_name: 'app_name_android',
  //   },
  //   web: {
  //     url: 'https://nextjs.org/web',
  //     should_fallback: true,
  //   },
  // },
};
