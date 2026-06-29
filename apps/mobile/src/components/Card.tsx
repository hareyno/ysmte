// src/components/Card.tsx

import React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";

import { colors, radius, spacing, shadows } from "../theme";

export interface CardProps {
  children: React.ReactNode;

  /**
   * Makes the card pressable.
   */
  onPress?: () => void;

  /**
   * Adds extra padding.
   *
   * none
   * sm
   * md
   * lg
   */
  padding?: "none" | "sm" | "md" | "lg";

  /**
   * Card style overrides.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Remove the border.
   */
  bordered?: boolean;

  /**
   * Enable shadows.
   */
  elevated?: boolean;

  /**
   * Allow content to overflow.
   */
  overflow?: "hidden" | "visible";
}

const paddingValues = {
  none: 0,
  sm: spacing.lg,
  md: spacing.xl,
  lg: spacing["2xl"],
};

export function Card({
  children,
  onPress,
  padding = "md",
  bordered = true,
  elevated = true,
  overflow = "hidden",
  style,
}: CardProps) {
  const cardStyle = [
    styles.card,

    bordered && styles.border,

    elevated && shadows.card,

    {
      padding: paddingValues[padding],
      overflow,
    },

    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        android_ripple={{
          color: "rgba(240,78,36,0.08)",
          borderless: false,
        }}
        style={({ pressed }) => [cardStyle, pressed && styles.pressed]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,

    borderRadius: radius["2xl"],

    overflow: "hidden",
  },

  border: {
    borderWidth: StyleSheet.hairlineWidth,

    borderColor: colors.border,
  },

  pressed: {
    opacity: 0.96,

    transform: [{ scale: 0.985 }],
  },
});
