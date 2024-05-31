
// 主线程
class WorkerPromise {
  constructor(data) {
    this.promise = new Promise((resolve, reject) => {
      const worker = new Worker('/worker.js')
      worker.postMessage(data)
      worker.onmessage = function (e) {
        const result = e.data
        resolve(result)
      }
    })
  }

  // Expose then method
  then(onFulfilled, onRejected) {
    return this.promise.then(onFulfilled, onRejected)
  }
}

// Usage example
const wf = new WorkerPromise(2)
wf.then(function (result) {
  console.log('Calculation result:', result)
})