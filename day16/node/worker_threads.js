const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  console.log("1");
  const worker = new Worker(__filename);
  console.log("3");
  worker.on("message", (message) => console.log("from worker", message));
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping");
} else {
  console.log("2");
  parentPort.on("message", (value) => {
    console.log("from parent", value);
    console.log("4");
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
