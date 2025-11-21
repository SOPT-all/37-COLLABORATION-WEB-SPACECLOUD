/**
 * Object.entries의 반환값을 정확한 타입 (keyof T, T[K]) 변환하는 유틸 함수
 * - Object.entries는 (string, any)[] 형태라 타입 정보를 잃지만
 *   해당 함수 사용으로 key/value 타입을 유지한 튜플 배열 반환
 * - 예: typedEntries({ a: 1, b: 2 }) -> ['a', 1] | ['b', 2]
 * - 예: typedEntries({ a: { b: 1 }, c: { d: 2 } }) -> ['a', { b: 1 }] | ['c', { d: 2 }]
 */
export const typedEntries = <T extends object>(obj: T) => {
  return Object.entries(obj) as { [K in keyof T]: [K, T[K]] }[keyof T][];
};
