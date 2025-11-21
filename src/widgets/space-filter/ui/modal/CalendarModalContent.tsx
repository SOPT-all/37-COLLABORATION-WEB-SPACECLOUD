import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import Button from '@/shared/ui/Button';
import * as s from './CalendarModalContent.css';
import type { ModalProps } from '@/shared/types/common';

const CalendarModalContent = ({ onClose }: ModalProps) => {
  const [date, setDate] = useState<Date | null>(null);
  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    const formatDate = dayjs(newDate).format('YYYY-MM-DD');
    console.log(formatDate);
  };

  useEffect(() => {
    console.log(date);
  }, [date]);
  return (
    <div className={s.wrapper}>
      <div className={s.calendarWrapper}>
        <Calendar
          value={date}
          onChange={(value) => handleDateChange(value as Date)}
          formatDay={(locale, date) => dayjs(date).format('D')}
          formatYear={(locale, date) => dayjs(date).format('YYYY')}
          formatMonthYear={(locale, date) => dayjs(date).format('YYYY. MM월')}
          calendarType='gregory'
          next2Label={false}
          prev2Label={false}
          minDetail='year'
        />
      </div>
      <Button styleType='cta' font='body_sb_16' onClick={onClose}>
        날짜 적용하기
      </Button>
    </div>
  );
};

export default CalendarModalContent;
