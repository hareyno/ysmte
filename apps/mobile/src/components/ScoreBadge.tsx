// src/components/ScoreBadge.tsx

import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { colors, radius, spacing, typography } from "../theme";

export interface ScoreBadgeProps {
  /**
   * Score from 0–1000.
   */
  score: number;

  /**
   * Small | Medium | Large
   */
  size?: "sm" | "md" | "lg";

  /**
   * Filled circle or subtle pill.
   */
  variant?: "filled" | "outlined";

  style?: StyleProp<ViewStyle>;
}

const dimensions = {
  sm: 34,
  md: 42,
  lg: 52,
};

const fontSizes = {
  sm: 12,
  md: 15,
  lg: 18,
};

function getScoreColor(score: number) {
  if (score >= 900) return colors.scoreExcellent;
  if (score >= 750) return colors.scoreGood;
  if (score >= 600) return colors.scoreAverage;
  if (score >= 400) return colors.scorePoor;
  return colors.scoreBad;
}

export function ScoreBadge({
  score,
  size = "md",
  variant = "filled",
  style,
}: ScoreBadgeProps) {
  const color = getScoreColor(score);

  const dimension = dimensions[size];

  return (
    <View
      accessibilityRole="text"
      style={[
        styles.container,

        {
          width: dimension,
          height: dimension,
          borderRadius: dimension / 2,
        },

        variant === "filled"
          ? {
              backgroundColor: `${color}18`,
            }
          : {
              backgroundColor: colors.surface,
              borderColor: color,
              borderWidth: StyleSheet.hairlineWidth,
            },

        style,
      ]}
    >
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[
          styles.text,
          {
            color,
            fontSize: fontSizes[size],
          },
        ]}
      >
        {score}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: spacing.sm,
  },

  text: {
    ...typography.title,

    fontWeight: "700",

    includeFontPadding: false,
  },
});