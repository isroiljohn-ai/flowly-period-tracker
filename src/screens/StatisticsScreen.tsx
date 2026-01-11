import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const StatisticsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Statistics</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cycle Length</Text>
          <View style={styles.chartPlaceholder}>
            <View style={[styles.bar, { height: '60%' }]} />
            <View style={[styles.bar, { height: '80%', backgroundColor: COLORS.primary }]} />
            <View style={[styles.bar, { height: '70%' }]} />
            <View style={[styles.bar, { height: '85%' }]} />
            <View style={[styles.bar, { height: '65%' }]} />
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statLabel}>Average</Text>
            <Text style={styles.statValue}>28 Days</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Period Duration</Text>
          <View style={styles.chartPlaceholder}>
            <View style={[styles.bar, { height: '50%' }]} />
            <View style={[styles.bar, { height: '50%', backgroundColor: COLORS.primary }]} />
            <View style={[styles.bar, { height: '45%' }]} />
            <View style={[styles.bar, { height: '55%' }]} />
            <View style={[styles.bar, { height: '50%' }]} />
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statLabel}>Average</Text>
            <Text style={styles.statValue}>5 Days</Text>
          </View>
        </View>

        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Health Summary</Text>
          <Text style={styles.summaryText}>Your cycle is highly regular. This month was 1 day shorter than your average.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SIZES.padding,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F1F3F5',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 20,
  },
  chartPlaceholder: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  bar: {
    width: 30,
    backgroundColor: '#FFDCE3',
    borderRadius: 8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F5',
  },
  statLabel: {
    color: COLORS.muted,
    fontSize: 14,
  },
  statValue: {
    fontWeight: 'bold',
    color: COLORS.text,
    fontSize: 14,
  },
  summaryBox: {
    backgroundColor: COLORS.lightPink,
    padding: 20,
    borderRadius: 24,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
});
