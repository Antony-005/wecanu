
export function firstImage(globResult) {
  const keys = Object.keys(globResult).sort();
  if (keys.length === 0) return null;
  return globResult[keys[0]].default;
}

export function nthImage(globResult, n) {
  const keys = Object.keys(globResult).sort();
  if (keys.length === 0) return null;
  return globResult[keys[n] ?? keys[0]].default;
}