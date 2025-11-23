import ky from 'ky';
import {
  authRequestInterceptor,
  authResponseInterceptor,
  retryInterceptor,
} from './interceptor.ts';

const BASE_URL = import.meta.env.VITE_API_URL;

export const kyInstance = ky.create({
  prefixUrl: BASE_URL,
  timeout: 10_000,
  retry: 0,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    // 두 훅은 실제 구현이후 주석을 해제합니다.
    // beforeError: [errorInterceptor],
    beforeRetry: [retryInterceptor],
    beforeRequest: [authRequestInterceptor],
    afterResponse: [authResponseInterceptor],
  },
});
