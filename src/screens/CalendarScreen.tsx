import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { COLORS, SIZES } from '../constants/theme';

const CalendarScreen = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calendar</Text>
      </View>

      <View style={styles.monthSelector}>
        <TouchableOpacity><ChevronLeft color={COLORS.text} /></TouchableOpacity>
        <Text style={styles.monthText}>January 2026</Text>
        <TouchableOpacity><ChevronRight color={COLORS.text} /></TouchableOpacity>
      </View>

      <View style={styles.calendarContainer}>
        <View style={styles.weekDays}>
          {days.map((day, i) => (
            <Text key={i} style={styles.weekDayText}>{day}</Text>
          ))}
        </View>
        <View style={styles.datesGrid}>
          {dates.map((date) => {
            const isPeriod = date >= 1 && date <= 5;
            const isPredicted = date >= 28;
            return (
              <View key={date} style={styles.dateCell}>
                <View style={[
                  styles.dateCircle,
                  isPeriod && styles.periodCircle,
                  isPredicted && styles.predictedCircle
                ]}>
                  <Text style={[
                    styles.dateText,
                    (isPeriod || isPredicted) && styles.activeDateText
                  ]}>{date}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <ScrollView style={styles.legend}>
        <Text style={styles.legendTitle}>Insights</Text>
        <View style={styles.insightCard}>
          <View style={[styles.dot, { backgroundColor: COLORS.primary }]} />
          <View>
            <Text style={styles.insightText}>Next period in 16 days</Text>
            <Text style={styles.insightSub}>Predicted: Jan 28 - Feb 2</Text>
          </View>
        </View>
        <View style={styles.insightCard}>
          <View style={[styles.dot, { backgroundColor: '#3B82F6' }]} />
          <View>
            <Text style={styles.insightText}>Ovulation in 2 days</Text>
            <Text style={styles.insightSub}>High chance of pregnancy</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: SIZES.padding,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 20,
    color: COLORS.text,
  },
  calendarContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  weekDayText: {
    width: '14%',
    textAlign: 'center',
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '600',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  dateCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  periodCircle: {
    backgroundColor: COLORS.primary,
  },
  predictedCircle: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
  },
  dateText: {
    fontSize: 14,
    color: COLORS.text,
  },
  activeDateText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  legend: {
    padding: SIZES.padding,
    backgroundColor: '#F8F9FA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  legendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  insightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  insightText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  insightSub: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },
});
