import { ReactNode, useState, useEffect } from "react";
import { measureInitial } from "./functions";
import { initialTransaction } from "./functions";
import { captureNetworkData } from "./network";

measureInitial();

export function PerfMeasureProvider({
  children,
  userData,
}: {
  children: ReactNode;
  userData: Record<string, any>;
}) {
  // TODO: 유저 정보 같은걸 가지고 있어야하고, 센트리의 setTag처럼 유저정보를 셋업하는 함수를 context로 내려준다
  // TODO: 타임스팬의 시작/끝을 알아야함?
  // TODO: 적절한 타이밍에 우리서버로 보내는 역할
  const [user, setUser] = useState(userData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 값 측정이 끝나면 네트워크 정보를 한번 가져옴
      if (
        initialTransaction.webVitals.LCP.value > 0 &&
        initialTransaction.webVitals.FID.value > 0 &&
        initialTransaction.webVitals.TTFB.value > 0 &&
        initialTransaction.webVitals.FCP.value > 0
      ) {
        initialTransaction.user = user;

        const network = captureNetworkData();
        initialTransaction.network = network;

        console.info(
          "성능 측정 값이 모두 확보되어 유저 정보를 넣고 서버로 보냅니다",
          initialTransaction
        );
        clearInterval(intervalId);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [user]);

  return <>{children}</>;
}
