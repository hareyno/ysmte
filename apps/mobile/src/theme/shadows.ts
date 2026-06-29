// src/theme/shadows.ts

import { Platform } from "react-native";

export const shadows = {
  card: Platform.select({
    ios: {
      shadowColor: "#232023",
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.08,
      shadowRadius: 30,
    },
    android: {
      elevation: 6,
    },
  }),

  button: Platform.select({
    ios: {
      shadowColor: "#F04E24",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 20,
    },
    android: {
      elevation: 4,
    },
  }),

  navigation: Platform.select({
    ios: {
      shadowColor: "#232023",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.08,
      shadowRadius: 20,
    },
    android: {
      elevation: 8,
    },
  }),
} as const;
