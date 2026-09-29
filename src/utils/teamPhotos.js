export function teamPhoto(globResult, slug) {
  if (!slug) return null;
  const entry = Object.keys(globResult).find((path) => {
    const filename = path.split("/").pop();
    const nameOnly = filename.replace(/\.(jpg|jpeg|JPG|JPEG)$/, "");
    return nameOnly === slug;
  });
  return entry ? globResult[entry].default : null;
}