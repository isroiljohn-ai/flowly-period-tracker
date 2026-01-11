import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Droplet, Smile, Coffee, Pill } from 'lucide-react-native';
import { COLORS, SIZES } from '../constants/theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Sarah</Text>
            <Text style={styles.date}>Monday, Jan 11</Text>
          </View>
          <View style={styles.avatar} />
        </View>

        <View style={styles.cycleCard}>
          <View style={styles.cycleCircle}>
            <Text style={styles.cycleDay}>Day 12</Text>
            <Text style={styles.cycleStatus}>Follicular Phase</Text>
          </View>
          <View style={styles.cycleInfo}>
            <Text style={styles.infoTitle}>Period in 16 days</Text>
            <Text style={styles.infoSubtitle}>Low chance of pregnancy</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Daily Log</Text>
        <View style={styles.logGrid}>
          {[
            { label: 'Flow', icon: <Droplet color={COLORS.primary} />, color: '#FFF0F3' },
            { label: 'Mood', icon: <Smile color="#FFB100" />, color: '#FFF9E6' },
            { label: 'Energy', icon: <Coffee color="#3B82F6" />, color: '#EBF4FF' },
            { label: 'Medicine', icon: <Pill color="#10B981" />, color: '#E6FFFA' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={[styles.logItem, { backgroundColor: item.color }]}>
              {item.icon}
              <Text style={styles.logLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.waterCard}>
          <Text style={styles.waterTitle}>Water Intake</Text>
          <Text style={styles.waterAmount}>1200 / 2000 ml</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '60%' }]} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SIZES.padding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  date: {
    fontSize: 14,
    color: COLORS.muted,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: COLORS.lightPink,
  },
  cycleCard: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  cycleCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  cycleDay: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cycleStatus: {
    color: '#FFFFFF',
    fontSize: 10,
    opacity: 0.8,
  },
  cycleInfo: {
    marginLeft: 20,
    flex: 1,
  },
  infoTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  infoSubtitle: {
    color: '#FFFFFF',
    fontSize: 12,
    opacity: 0.9,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
  },
  logGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  logItem: {
    width: '22%',
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logLabel: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 8,
    color: COLORS.text,
  },
  waterCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 24,
    padding: 20,
  },
  waterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 10,
  },
  waterAmount: {
    fontSize: 14,
    color: COLORS.muted,
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E9ECEF',
    borderRadius: 4,
  },
  progress: {
    height: 8,
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
});
