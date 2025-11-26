import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/token.css';
import 'react-calendar/dist/Calendar.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.s23,
  width: '376px',
  padding: `${vars.space.s23} ${vars.space.s37}`,
});

export const calendarWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  borderBottom: `1px solid ${vars.color.grayscale.gray100}`,
});

// 일 전체 폰트 색상
globalStyle(`${wrapper} .react-calendar__month-view__days__day abbr`, {
  fontWeight: vars.font.weight.regular,
  fontSize: vars.font.size.s12,
  lineHeight: vars.font.lineHeight.h14,
  letterSpacing: vars.font.letterSpacing.tight_03,
  color: vars.color.grayscale.black,
});

globalStyle(`${wrapper} .react-calendar__navigation`, {
  display: 'flex',
  gap: 42,
  marginBottom: vars.space.s16,
});

globalStyle(`${wrapper} .react-calendar__month-view__days`, {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
});

globalStyle(`${wrapper} .react-calendar__navigation`, {
  gap: '40px',
  marginBottom: vars.space.s12,
});

// YYYY.MM월 텍스트 색상
globalStyle(`${wrapper} .react-calendar__navigation__label__labelText`, {
  fontWeight: vars.font.weight.semibold,
  fontSize: vars.font.size.s16,
  lineHeight: vars.font.lineHeight.h24,
  letterSpacing: vars.font.letterSpacing.tight_04,
  color: vars.color.grayscale.gray900,
});

// <, > 색상
globalStyle(`${wrapper} .react-calendar__navigation__arrow`, {
  backgroundColor: 'transparent',
  color: vars.color.grayscale.gray800,
});

// <, > 폰트
globalStyle(`${wrapper} .react-calendar__navigation button`, {
  fontWeight: vars.font.weight.semibold,
  fontSize: vars.font.size.s16,
});

// 요일 헤더
globalStyle(`${wrapper} .react-calendar__month-view__weekdays`, {
  display: 'flex',
  gap: vars.space.s8,
  padding: `${vars.space.s12} 0 ${vars.space.s12} 0`,
  borderTop: `1px solid ${vars.color.grayscale.gray200}`,
  borderBottom: `1px solid ${vars.color.grayscale.gray200}`,
});

// 요일 밑줄 제거
globalStyle(`${wrapper} .react-calendar__month-view__weekdays abbr`, {
  textDecoration: 'none',
});

// 헤더 폰트
globalStyle(`${wrapper} .react-calendar__month-view__weekdays__weekday`, {
  fontWeight: vars.font.weight.regular,
  fontSize: vars.font.size.s12,
  lineHeight: vars.font.lineHeight.h14,
  letterSpacing: vars.font.letterSpacing.tight_03,
  color: vars.color.grayscale.black,
  width: 'auto',
  height: 'auto',
});

// 토요일 헤더 색상
globalStyle(
  `${wrapper} .react-calendar__month-view__weekdays__weekday--weekend abbr[title="토요일"]`,
  {
    color: vars.color.etc.blue,
    textDecoration: 'none',
  },
);
// 일요일 헤더 색상
globalStyle(
  `${wrapper} .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"]`,
  {
    color: vars.color.etc.red,
    textDecoration: 'none',
  },
);

// 토요일 날짜 색상
globalStyle(`${wrapper} .react-calendar__month-view__days__day:nth-child(7n) abbr`, {
  color: vars.color.etc.blue,
  textDecoration: 'none',
});

// 일요일 날짜 색상
globalStyle(`${wrapper} .react-calendar__month-view__days__day:nth-child(7n+1) abbr`, {
  color: vars.color.etc.red,
  textDecoration: 'none',
});

// 요일 헤더 가운데 정렬 및 크기 고정
globalStyle(`${wrapper} .react-calendar__month-view__weekdays__weekday`, {
  textAlign: 'center',
  maxWidth: 36,
  flex: `0 0 36px`,
});

// 오늘 날짜
globalStyle(`${wrapper} .react-calendar__tile--now`, {
  position: 'relative',
});

// 오늘 날짜 원형 스타일
globalStyle(`${wrapper} .react-calendar__tile--now::after`, {
  content: '',
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 30,
  height: 32,
  border: `1px solid ${vars.color.primary[200]}`,
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
});

// 달력 날짜 칸 크기
globalStyle(`${wrapper} .react-calendar__month-view__days__day`, {
  height: 36,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// 날짜 크기 제어
globalStyle(`${wrapper} .react-calendar__month-view__days__day abbr`, {
  width: 36,
  height: 36,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// 선택된 날짜
globalStyle(`${wrapper} .react-calendar__tile--active`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
globalStyle(`${wrapper} .react-calendar__tile--active abbr`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 32,
  color: vars.color.grayscale.white,
  backgroundColor: vars.color.primary[200],
  borderRadius: '50%',
});

// 비활성화된 날짜 색상 (다른 스타일보다 우선순위 높게)
globalStyle(`${wrapper} .react-calendar__tile[disabled] abbr`, {
  color: `${vars.color.grayscale.gray500} !important`,
});
