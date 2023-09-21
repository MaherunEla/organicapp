"use client";
import Navbar from "./Components/layout/Header/Navbar";
import "src/app/styles/globals.css";
import { Roboto, Yellowtail, Open_Sans } from "next/font/google";
import Footer from "./Components/layout/Footer/Footer";
import { ReactElement } from "react";
import { Provider } from "react-redux/es/exports";
import { store } from "../redux_store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
  variable: "--roboto",
});
const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--yellowtail",
});
const open_sens = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  variable: "--open_sens",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactElement }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${yellowtail.variable} ${open_sens}`}
      >
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
