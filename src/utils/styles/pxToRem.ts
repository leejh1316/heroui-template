function getRootFontSize(): number {
  if (typeof window === "undefined" || typeof document === "undefined") return 16;
  const rootFontSize = window.getComputedStyle(document.documentElement).fontSize;
  return parseFloat(rootFontSize);
}

/**
 *
 * @param px
 * @returns `rem`
 */
function pxToRem(px: number): string {
  const rootFontSize = getRootFontSize();
  return `${px / rootFontSize}rem`;
}

export default pxToRem;
