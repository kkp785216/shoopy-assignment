import PresistentComponents from "@/components/PersistentComponents";
import "@/styles/globals.css";
import "@/styles/utility.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PresistentComponents>
      <Component {...pageProps} />
    </PresistentComponents>
  );
}
