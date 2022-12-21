export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): T {
  let lastCall = 0;
  return function (this: any, ...args: any[]) {
    const now = Date.now();
    if (now - lastCall < wait) {
      return;
    }
    lastCall = now;
    return fn.apply(this, args);
  } as T;
}
