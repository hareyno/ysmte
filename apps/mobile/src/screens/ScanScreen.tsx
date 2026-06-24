import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { colors } from "../theme/colors";

const FAKE_RESULT = {
  barcode: "0194252930091",
  brand: "Patagonia",
  product: "Better Sweater Fleece Jacket",
  rating: "A+",
  factory: "Fair Trade Certified — Monterrey, MX",
  workers: "2,400 employees",
  audited: "Feb 2024",
  summary: "Fair wages, audited annually, 0 forced-labor flags.",
};

export function ScanScreen() {
  const [scanned, setScanned] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Scan a Product</Text>
          <Text style={styles.subtitle}>
            Point your camera at any barcode to reveal its supply chain.
          </Text>
        </View>

        {!scanned ? (
          <View style={styles.scanArea}>
            <View style={styles.viewfinder}>
              <View style={[styles.corner, styles.cornerTL]} />
              <View style={[styles.corner, styles.cornerTR]} />
              <View style={[styles.corner, styles.cornerBL]} />
              <View style={[styles.corner, styles.cornerBR]} />
              <Text style={styles.viewfinderHint}>
                Camera not active in MVP
              </Text>
            </View>
            <Button label="Simulate Scan" onPress={() => setScanned(true)} />
          </View>
        ) : (
          <View style={styles.resultArea}>
            <View style={styles.resultHeader}>
              <View>
                <Text style={styles.resultBrand}>{FAKE_RESULT.brand}</Text>
                <Text style={styles.resultProduct}>{FAKE_RESULT.product}</Text>
                <Text style={styles.barcode}>#{FAKE_RESULT.barcode}</Text>
              </View>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>{FAKE_RESULT.rating}</Text>
              </View>
            </View>

            <Text style={styles.sectionLabel}>Factory Details</Text>
            <Card style={styles.detailCard}>
              <Row label="Location" value={FAKE_RESULT.factory} />
              <Row label="Workers" value={FAKE_RESULT.workers} />
              <Row label="Last Audit" value={FAKE_RESULT.audited} />
            </Card>

            <Card style={styles.summaryCard}>
              <Text style={styles.summaryText}>{FAKE_RESULT.summary}</Text>
            </Card>

            <Button label="Scan Another" onPress={() => setScanned(false)} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={rowStyles.row}>
      <Text style={rowStyles.label}>{label}</Text>
      <Text style={rowStyles.value}>{value}</Text>
    </View>
  );
}

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  value: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.text,
    flexShrink: 1,
    textAlign: "right",
    marginLeft: 12,
  },
});

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
  scanArea: {
    flex: 1,
    alignItems: "center",
    gap: 28,
    paddingTop: 16,
  },
  viewfinder: {
    width: 260,
    height: 260,
    borderRadius: 14,
    backgroundColor: colors.accentLight,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  corner: {
    position: "absolute",
    width: 24,
    height: 24,
    borderColor: colors.accent,
    borderWidth: 2.5,
  },
  cornerTL: {
    top: 12,
    left: 12,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
  },
  cornerTR: {
    top: 12,
    right: 12,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: 5,
  },
  cornerBL: {
    bottom: 12,
    left: 12,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
  },
  cornerBR: {
    bottom: 12,
    right: 12,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: 5,
  },
  viewfinderHint: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center",
  },
  resultArea: {
    flex: 1,
    gap: 16,
  },
  resultHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingBottom: 4,
  },
  resultBrand: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    letterSpacing: -0.3,
  },
  resultProduct: {
    fontSize: 15,
    color: colors.textSecondary,
    marginTop: 2,
  },
  barcode: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
    fontVariant: ["tabular-nums"],
  },
  ratingBadge: {
    backgroundColor: "#22A06B",
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  detailCard: {
    gap: 0,
  },
  summaryCard: {
    backgroundColor: colors.accentLight,
    borderColor: "#F9D6CC",
  },
  summaryText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
});
