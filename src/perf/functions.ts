import { startMeasureWebVitals } from "./webVital";
import { InitialTransaction, WebVital } from "./types";
import { v4 as uuidv4 } from "uuid";

export const initialTransaction: InitialTransaction = {
  id: {
    uuid: uuidv4(),
    type: "initial",
    timestamp: Math.floor(new Date().getTime() / 1000),
  },
  user: {},
  webVitals: {
    CLS: {
      value: 0,
      rating: "good",
    },
    FID: {
      value: 0,
      rating: "good",
    },
    LCP: {
      value: 0,
      rating: "good",
    },
    TTFB: {
      value: 0,
      rating: "good",
    },
    FCP: {
      value: 0,
      rating: "good",
    },
  },
  network: {},
};

//TODO: 센트리처럼 태깅을 할때 뭔가 정보를 넣어줄 수 있는 방식은 필요

export const measureInitial = () => {
  if (typeof window !== "undefined") {
    //TODO: 실제로는 스토리지에 살리기 / 싱크

    startMeasureWebVitals((name: string, value: number, rating: string) => {
      initialTransaction.webVitals[
        name as keyof InitialTransaction["webVitals"]
      ] = {
        value,
        rating: rating as WebVital["rating"],
      };
    });
  }
};
