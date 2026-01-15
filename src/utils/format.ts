// Utility functions for formatting and data manipulation

import type { ScheduleItem } from '@/types';

/**
 * Format a phone number for display
 * Example: formatPhone('5551234567') => '(555) 123-4567'
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Format schedule items for display
 * Groups consecutive days with same hours
 */
export function formatSchedule(schedule: ScheduleItem[]): string[] {
  if (schedule.length === 0) return [];

  const formatted: string[] = [];
  let currentGroup = schedule[0];
  let groupStart = schedule[0];

  for (let i = 1; i < schedule.length; i++) {
    const current = schedule[i];
    if (current.hours === currentGroup.hours) {
      currentGroup = current;
    } else {
      const line =
        groupStart.day === currentGroup.day
          ? `${groupStart.day}: ${groupStart.hours}`
          : `${groupStart.day} - ${currentGroup.day}: ${groupStart.hours}`;
      formatted.push(line);
      groupStart = current;
      currentGroup = current;
    }
  }

  const line =
    groupStart.day === currentGroup.day
      ? `${groupStart.day}: ${groupStart.hours}`
      : `${groupStart.day} - ${currentGroup.day}: ${groupStart.hours}`;
  formatted.push(line);

  return formatted;
}

/**
 * Check if the food truck is currently open based on schedule
 */
export function isCurrentlyOpen(schedule: ScheduleItem[]): boolean {
  const now = new Date();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDay = dayNames[now.getDay()];

  const todaySchedule = schedule.find(item => item.day === currentDay);
  if (!todaySchedule || todaySchedule.hours === 'Closed') {
    return false;
  }

  // Basic check - can be expanded with actual time parsing
  return true;
}
