import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Card } from "../components/Card";
import { colors } from "../theme/colors";

const RECENT_SCANS = [
  {
    id: "1",
    brand: "Everlane",
    product: "Classic Oxford Shirt",
    rating: "A",
    date: "Jun 22",
  },
  {
    id: "2",
    brand: "Patagonia",
    product: "Fleece Pullover",
    rating: "A+",
    date: "Jun 19",
  },
  {
    id: "3",
    brand: "Levi's",
    product: "501 Original Jeans",
    rating: "B",
    date: "Jun 14",
  },
  {
    id: "4",
    brand: "H&M",
    product: "Cotton Crewneck",
    rating: "C",
    date: "Jun 10",
  },
];

const RATING_COLORS: Record<string, string> = {
  "A+": "#22A06B",
  A: "#36B37E",
  B: "#FFAB00",
  C: "#F04E24",
  D: "#BF2600",
};

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning 👋</Text>
          <Text style={styles.title}>Your Supply Chain</Text>
          <Text style={styles.subtitle}>
            Scan any product barcode to see who made it and how.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <Card style={styles.statCard}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Scans</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Brands</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={[styles.statNumber, { color: colors.accent }]}>
              B+
            </Text>
            <Text style={styles.statLabel}>Avg Score</Text>
          </Card>
        </View>

        <Text style={styles.sectionLabel}>Recent Scans</Text>
        <FlatList
          data={RECENT_SCANS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Card style={styles.scanRow}>
              <View style={styles.scanLeft}>
                <Text style={styles.scanBrand}>{item.brand}</Text>
                <Text style={styles.scanProduct}>{item.product}</Text>
              </View>
              <View style={styles.scanRight}>
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
                <Text style={styles.scanDate}>{item.date}</Text>
              </View>
            </Card>
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
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
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
  scanRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scanLeft: {
    flex: 1,
  },
  scanBrand: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 2,
  },
  scanProduct: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  scanRight: {
    alignItems: "flex-end",
    gap: 4,
  },
  ratingBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 13,
  },
  scanDate: {
    fontSize: 11,
    color: colors.textSecondary,
  },
});
