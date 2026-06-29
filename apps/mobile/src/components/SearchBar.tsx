// src/components/SearchBar.tsx

import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

import {
  colors,
  radius,
  spacing,
  typography,
  shadows,
} from "../theme";

export interface SearchBarProps {
  value: string;

  onChangeText: (text: string) => void;

  placeholder?: string;

  autoFocus?: boolean;

  editable?: boolean;

  onSubmitEditing?: () => void;

  onClear?: () => void;

  leftElement?: React.ReactNode;

  rightElement?: React.ReactNode;

  style?: StyleProp<ViewStyle>;
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = "Search products, brands, materials...",
  autoFocus = false,
  editable = true,
  onSubmitEditing,
  onClear,
  leftElement,
  rightElement,
  style,
}: SearchBarProps) {
  return (
    <View
      style={[
        styles.container,
        shadows.card,
        style,
      ]}
    >
      {leftElement ?? (
        <Text style={styles.icon}>🔍</Text>
      )}

      <TextInput
        style={styles.input}
        value={value}
        editable={editable}
        autoFocus={autoFocus}
        placeholder={placeholder}
        placeholderTextColor={colors.textTertiary}
        selectionColor={colors.primary}
        cursorColor={colors.primary}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
      />

      {rightElement ??
        (value.length > 0 && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Clear search"
            onPress={onClear}
            style={({ pressed }) => [
              styles.clearButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.icon}>✕</Text>
          </Pressable>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: colors.surface,

    borderRadius: radius.pill,

    borderWidth: StyleSheet.hairlineWidth,

    borderColor: colors.border,

    paddingHorizontal: spacing.lg,

    height: 54,

    gap: spacing.md,
  },

  input: {
    flex: 1,

    ...typography.body,

    color: colors.text,
  },

  icon: {
    fontSize: 18,

    color: colors.textSecondary,
  },

  clearButton: {
    width: 28,

    height: 28,

    borderRadius: 14,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: colors.surfaceSecondary,
  },

  pressed: {
    opacity: 0.6,
  },
});