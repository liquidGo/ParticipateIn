self.onmessage = function (e) {
  console.log('%c [ e ]-2', 'font-size:13px; background:#50bb46; color:#94ff8a;', e)
  console.log('接收到消息:', e.data)
  let data = e.data
  // 这里执行耗时的计算任务
  const result = setTimeout(() => {
    console.log('计算完成')
    self.postMessage(data * 2)
  }, 2000)
}