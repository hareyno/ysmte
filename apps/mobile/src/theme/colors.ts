// src/theme/colors.ts

export const colors = {
  // Brand
  primary: "#F04E24",

  // Backgrounds
  background: "#F9F5EC",
  surface: "#FFFDF9",
  surfaceSecondary: "#F4EFE6",

  // Text
  text: "#232023",
  textSecondary: "#6F675F",
  textTertiary: "#948C84",

  // Borders
  border: "#E8E1D6",

  // Semantic
  success: "#22A06B",
  warning: "#D88C00",
  error: "#C43C24",

  // Utility
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",

  // Score Colors (future-proofing)
  scoreExcellent: "#22A06B",
  scoreGood: "#79B64C",
  scoreAverage: "#D88C00",
  scorePoor: "#D96A3A",
  scoreBad: "#C43C24",
} as const;

export type Colors = typeof colors;
