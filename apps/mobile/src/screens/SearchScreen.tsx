import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Card } from "../components/Card";
import { colors } from "../theme/colors";

const SAMPLE_PRODUCTS = [
  {
    id: "1",
    brand: "Everlane",
    product: "The Classic Oxford",
    category: "Tops",
    rating: "A",
  },
  {
    id: "2",
    brand: "Patagonia",
    product: "Better Sweater",
    category: "Outerwear",
    rating: "A+",
  },
  {
    id: "3",
    brand: "Allbirds",
    product: "Tree Runner",
    category: "Footwear",
    rating: "A",
  },
  {
    id: "4",
    brand: "Levi's",
    product: "501 Original",
    category: "Bottoms",
    rating: "B",
  },
  {
    id: "5",
    brand: "Uniqlo",
    product: "Ultra Light Down",
    category: "Outerwear",
    rating: "B+",
  },
  {
    id: "6",
    brand: "H&M",
    product: "Slim Fit Chinos",
    category: "Bottoms",
    rating: "C",
  },
  {
    id: "7",
    brand: "Tentree",
    product: "Bamone Jogger",
    category: "Bottoms",
    rating: "A",
  },
];

const RATING_COLORS: Record<string, string> = {
  "A+": "#22A06B",
  A: "#36B37E",
  "B+": "#57D9A3",
  B: "#FFAB00",
  C: "#F04E24",
};

export function SearchScreen() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? SAMPLE_PRODUCTS.filter(
        (p) =>
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.product.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()),
      )
    : SAMPLE_PRODUCTS;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>
          <Text style={styles.subtitle}>Find brands and products by name.</Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.input}
            placeholder="Brand, product, or category…"
            placeholderTextColor={colors.textSecondary}
            value={query}
            onChangeText={setQuery}
            clearButtonMode="while-editing"
            returnKeyType="search"
            autoCorrect={false}
          />
        </View>

        <Text style={styles.sectionLabel}>
          {query.trim()
            ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`
            : "All Products"}
        </Text>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No products match "{query}"</Text>
            </View>
          }
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.75}>
              <Card style={styles.productRow}>
                <View style={styles.productLeft}>
                  <Text style={styles.productBrand}>{item.brand}</Text>
                  <Text style={styles.productName}>{item.product}</Text>
                  <View style={styles.categoryTag}>
                    <Text style={styles.categoryText}>{item.category}</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.ratingBadge,
                    {
                      backgroundColor:
                        RATING_COLORS[item.rating] ?? colors.accent,
                    },
                  ]}
                >
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    marginBottom: 20,
    height: 48,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    height: 48,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  list: {
    gap: 10,
    paddingBottom: 32,
  },
  productRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productLeft: {
    flex: 1,
    gap: 3,
  },
  productBrand: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  productName: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  categoryTag: {
    alignSelf: "flex-start",
    backgroundColor: colors.background,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryText: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  ratingBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  ratingText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 13,
  },
  empty: {
    paddingTop: 48,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 15,
    color: colors.textSecondary,
  },
});
