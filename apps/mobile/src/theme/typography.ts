// src/theme/typography.ts

export const fonts = {
  display: "Recoleta",
  body: "Inter",
};

export const typography = {
  hero: {
    fontFamily: fonts.display,
    fontSize: 40,
    lineHeight: 44,
  },

  h1: {
    fontFamily: fonts.display,
    fontSize: 34,
    lineHeight: 38,
  },

  h2: {
    fontFamily: fonts.display,
    fontSize: 28,
    lineHeight: 32,
  },

  h3: {
    fontFamily: fonts.display,
    fontSize: 22,
    lineHeight: 26,
  },

  title: {
    fontFamily: fonts.display,
    fontSize: 18,
    lineHeight: 22,
  },

  body: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
  },

  bodySmall: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 20,
  },

  caption: {
    fontFamily: fonts.body,
    fontSize: 12,
    lineHeight: 16,
  },

  overline: {
    fontFamily: fonts.body,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 2,
  },
} as const;
