// src/components/Button.tsx

import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { colors, radius, shadows, spacing, typography } from "../theme";

export interface ButtonProps {
  title: string;

  onPress?: () => void;

  disabled?: boolean;

  loading?: boolean;

  fullWidth?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  variant?: "primary" | "secondary" | "ghost";

  size?: "sm" | "md" | "lg";

  style?: StyleProp<ViewStyle>;
}

const heights = {
  sm: 44,
  md: 52,
  lg: 60,
};

const horizontalPadding = {
  sm: spacing.xl,
  md: spacing["2xl"],
  lg: spacing["3xl"],
};

export function Button({
  title,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = true,
  leftIcon,
  rightIcon,
  variant = "primary",
  size = "md",
  style,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const variantStyle =
    variant === "primary"
      ? styles.primary
      : variant === "secondary"
      ? styles.secondary
      : styles.ghost;

  const textStyle =
    variant === "primary"
      ? styles.primaryText
      : variant === "secondary"
      ? styles.secondaryText
      : styles.ghostText;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={isDisabled}
      onPress={onPress}
      android_ripple={{
        color: "rgba(240,78,36,0.12)",
      }}
      style={({ pressed }) => [
        styles.button,
        variantStyle,
        shadows.button,
        {
          height: heights[size],
          paddingHorizontal: horizontalPadding[size],
          width: fullWidth ? "100%" : undefined,
        },
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator
            color={
              variant === "primary"
                ? colors.white
                : colors.primary
            }
          />
        ) : (
          <>
            {leftIcon}

            <Text style={[styles.label, textStyle]}>
              {title}
            </Text>

            {rightIcon}
          </>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: radius.pill,

    justifyContent: "center",

    alignItems: "center",
  },

  content: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    gap: spacing.sm,
  },

  label: {
    ...typography.body,

    fontWeight: "600",
  },

  primary: {
    backgroundColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.surface,

    borderWidth: StyleSheet.hairlineWidth,

    borderColor: colors.border,
  },

  ghost: {
    backgroundColor: "transparent",
  },

  primaryText: {
    color: colors.white,
  },

  secondaryText: {
    color: colors.text,
  },

  ghostText: {
    color: colors.primary,
  },

  pressed: {
    opacity: 0.95,

    transform: [{ scale: 0.985 }],
  },

  disabled: {
    opacity: 0.45,
  },
});