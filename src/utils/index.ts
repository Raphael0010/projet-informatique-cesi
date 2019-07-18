export function delay(ms: number) {
  return new Promise(r => global.setTimeout(r, ms));
}

export function toPercen(total: number, libre: number) {
  let _total = total / 1000;
  let _libre = libre / 1000;
  return Math.round(((_total - _libre) / _total) * 100);
}
