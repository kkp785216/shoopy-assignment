import PresistentComponents from "@/components/PersistentComponents";
import "@/styles/globals.css";
import "@/styles/utility.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="hidden lg:block">
        <PresistentComponents>
          <Component {...pageProps} />
        </PresistentComponents>
      </div>
      <div className="flex justify-center items-center min-h-screen flex-col p-6 lg:hidden">
        <h1 className="text-center text-lg font-medium">
          Please view this page at a width greater than 1024px for the best
          experience. Some changes after
        </h1>
      </div>
    </>
  );
}
