import { PerfMeasureProvider } from "@/perf/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PerfMeasureProvider
      userData={{
        userId: "34u72342347",
        userAge: "84",
      }}
    >
      <Component {...pageProps} />
    </PerfMeasureProvider>
  );
}
