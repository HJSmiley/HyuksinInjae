const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // 부모 스레드
  const numWorkers = 4;
  const results = [];
  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(__filename, {
      workerData: { start: i * 1e6, end: (i + 1) * 1e6 },
    });
    worker.on("message", (message) => {
      results.push(message);
      if (results.length === numWorkers) {
        console.log(
          "Total Sum:",
          results.reduce((sum, val) => sum + val, 0)
        );
      }
    });
    worker.on("exit", () => console.log(`Worker ${i} exit`));
  }
} else {
  // 워커 스레드
  const { start, end } = workerData;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += i;
  }
  parentPort.postMessage(sum);
}
