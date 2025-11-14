import type { AfterResponseHook, BeforeRequestHook, BeforeRetryHook } from "ky";

//
export const authRequestInterceptor: BeforeRequestHook = async () => {
  // todo: 토큰 헤더 처리 인터셉터 구현
};

export const authResponseInterceptor: AfterResponseHook = async () => {
  // todo: 토큰 재발급 처리 인터셉터
};

export const retryInterceptor: BeforeRetryHook = async () => {
  // todo: retry 인터셉터
  // ky retry count 주었을 경우 재시도가 필요하지 않은 상태 코드 핸들링
};

// todo: error interceptor
