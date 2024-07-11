const cache: Record<string, any> = {};

export const useOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) cache[key] = callback(); // ()을 붙여 호출해야 함수가 실행
  return cache[key] as T;
};
