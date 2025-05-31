import { describe, it, expect } from "vitest";
import { getLabel } from "../src/index.js";

describe("getLabel", () => {
  it("handles zero correctly", () => {
    expect(getLabel(0)).toBe("0+");
  });

  it("uses default '+' suffix when no options provided", () => {
    expect(getLabel(100)).toBe("100+");
  });

  it("accepts custom suffix", () => {
    expect(getLabel(100, { suffix: "~" })).toBe("100~");
  });

  it("handles thousands with K suffix", () => {
    expect(getLabel(1000)).toBe("1K+");
    expect(getLabel(1500)).toBe("1K+");
    expect(getLabel(7800)).toBe("7K+");
  });

  it("handles millions with M suffix", () => {
    expect(getLabel(1000000)).toBe("1M+");
    expect(getLabel(4500000)).toBe("4M+");
  });

  it("handles billions with B suffix", () => {
    expect(getLabel(1000000000)).toBe("1B+");
    expect(getLabel(2500000000)).toBe("2B+");
  });

  it("handles trillions with T suffix", () => {
    expect(getLabel(1000000000000)).toBe("1T+");
    expect(getLabel(5500000000000)).toBe("5T+");
  });

  it("throws error for non-finite numbers", () => {
    expect(() => getLabel(Infinity)).toThrow("Count must be a finite number");
    expect(() => getLabel(NaN)).toThrow("Count must be a finite number");
  });

  it("handles empty string suffix", () => {
    expect(getLabel(100, { suffix: "" })).toBe("100");
  });
});
