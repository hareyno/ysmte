// src/components/SectionHeader.tsx

import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import {
  colors,
  spacing,
  typography,
} from "../theme";

interface ChevronRightProps {
  size?: number;
  color?: string;
}

function ChevronRight({ size = 18, color }: ChevronRightProps) {
  return (
    <Text style={{ fontSize: size, color }}>
      ›
    </Text>
  );
}

export interface SectionHeaderProps {
  /**
   * Small uppercase label.
   *
   * Example:
   * FEATURED STORY
   */
  eyebrow?: string;

  /**
   * Main heading.
   *
   * Example:
   * From the editors
   */
  title: string;

  /**
   * Optional description underneath.
   */
  subtitle?: string;

  /**
   * Right-side text.
   *
   * Example:
   * See all
   */
  actionLabel?: string;

  /**
   * Callback when action pressed.
   */
  onActionPress?: () => void;

  /**
   * Shows >
   */
  showChevron?: boolean;

  /**
   * Optional custom element.
   */
  rightElement?: React.ReactNode;

  style?: StyleProp<ViewStyle>;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  actionLabel,
  onActionPress,
  showChevron = false,
  rightElement,
  style,
}: SectionHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        {!!eyebrow && (
          <Text style={styles.eyebrow}>
            {eyebrow}
          </Text>
        )}

        <Text style={styles.title}>
          {title}
        </Text>

        {!!subtitle && (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>

      {rightElement ? (
        rightElement
      ) : actionLabel || showChevron ? (
        <Pressable
          accessibilityRole="button"
          onPress={onActionPress}
          style={({ pressed }) => [
            styles.action,
            pressed && styles.pressed,
          ]}
        >
          {!!actionLabel && (
            <Text style={styles.actionText}>
              {actionLabel}
            </Text>
          )}

          {showChevron && (
            <ChevronRight
              size={18}
              color={colors.textSecondary}
            />
          )}
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "flex-end",
  },

  left: {
    flex: 1,

    paddingRight: spacing.md,
  },

  eyebrow: {
    ...typography.overline,

    color: colors.primary,

    marginBottom: spacing.xs,

    textTransform: "uppercase",
  },

  title: {
    ...typography.h3,

    color: colors.text,
  },

  subtitle: {
    ...typography.bodySmall,

    color: colors.textSecondary,

    marginTop: spacing.xs,
  },

  action: {
    flexDirection: "row",

    alignItems: "center",

    gap: spacing.xs,
  },

  actionText: {
    ...typography.caption,

    color: colors.primary,

    fontWeight: "600",
  },

  pressed: {
    opacity: 0.6,
  },
});