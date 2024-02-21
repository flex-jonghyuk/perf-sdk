export interface WebVital {
  value: number;
  rating: "good" | "needs-improvement" | "poor";
}

interface Transaction {
  id: {
    uuid: string;
    type: "initial" | "timeSpan";
    timestamp: number;
  };
  user: Record<string, any>;
}

export interface InitialTransaction extends Transaction {
  webVitals: {
    CLS: WebVital;
    FID: WebVital;
    LCP: WebVital;
    TTFB: WebVital;
    FCP: WebVital;
  };
  network: Record<string, any>;
}

export interface TimeSpanTransaction extends Transaction {
  key: string;
  duration: number;
}
