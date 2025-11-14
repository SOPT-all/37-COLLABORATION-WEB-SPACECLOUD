import { createTheme } from '@vanilla-extract/css';
import { vars } from '../../shared/styles/token.css.ts';

// 임시 테마
// 디자인 시스템 공개 후 수정
export const theme = createTheme(vars, {
  color: {
    background: '#F9FAFB',
    foreground: '#111827',
    primary: '#2563EB',
    secondary: '#6B7280',
    accent: '#10B981',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  font: {
    body: 'Pretendard, sans-serif',
    mono: 'Pretendard, sans-serif',
  },
  fontSize: {
    sm: '14px',
    md: '16px',
    lg: '20px',
  },
  layout: {
    maxWidth: '480px',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bigBold: '700',
  },
});
