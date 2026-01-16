// worker.js
self.onmessage = function(e) {
  const data = e.data;
  // 执行耗时计算
  const result = heavyCalculation(data);
  // 将结果发送回主线程
  self.postMessage(result);
};

function heavyCalculation(data) {
  // 这里是耗时的计算逻辑
  const {fun} =data;
  fun()
  console.log(data);
  return data;
}