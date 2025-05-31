import type { TallyaOptions } from "./types.js";

/**
 * @param count - Any finite number to convert to a label
 * @param options - Configuration options
 * @param options.suffix - Text to append to the label (defaults to '+')
 * @returns Formatted label string like '300+', '7K+' '12M+' etc
 * @throws {TypeError} If count is not a finite number
 */
export function getLabel(
  count: number,
  options: Pick<TallyaOptions, "suffix"> = {}
): string {
  if (!Number.isFinite(count)) {
    throw new TypeError("Count must be a finite number");
  }

  const { suffix = "+" } = options;

  if (count === 0) {
    return `0${suffix}`;
  }

  const units = ["", "K", "M", "B", "T"];
  const exp = Math.floor(Math.log10(Math.abs(count)) / 3);
  const unit = units[exp] || "";
  const value = exp === 0 ? count : Math.floor(count / Math.pow(10, exp * 3));

  return `${value}${unit}${suffix}`;
}
