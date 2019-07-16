export function delay(ms: number) {
  return new Promise(r => global.setTimeout(r, ms));
}
