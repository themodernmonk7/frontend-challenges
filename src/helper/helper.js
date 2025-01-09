export const throttleFunction = (fn, delay) => {
  let timerID
  return function (...args) {
    clearTimeout(timerID)
    timerID = setTimeout(() => {
      fn.apply(this, args)
      timerID = null
    }, delay)
  }
}
