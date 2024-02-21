import { onCLS, onFID, onLCP, onFCP, onTTFB, type Metric } from "web-vitals";

type Callback = (name: string, value: number, rating: string) => void;

const getSend = (setWebvital: Callback) => (metric: Metric) => {
  const { name, value, rating } = metric;
  setWebvital(name, value, rating);
};

export const startMeasureWebVitals = (callback: Callback) => {
  const send = getSend(callback);

  onFCP(send);
  onTTFB(send);
  onCLS(send);
  onFID(send);
  onLCP(send);
};
