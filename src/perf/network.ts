export const captureNetworkData = () => {
  let performanceEntries = performance.getEntriesByType("resource");
  let networkData: any[] = [];

  performanceEntries.forEach((entry) => {
    // 필요한 정보 추출 (예: URL, 타입, 로딩 시간 등)
    let data = {
      name: entry.name,
      entryType: entry.entryType,
      startTime: entry.startTime,
      duration: entry.duration,
    };
    networkData.push(data);
  });

  // JSON 형식으로 변환하여 출력 또는 다른 작업 수행
  return networkData;
};
