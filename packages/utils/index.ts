
export function mergeObjects<K extends object = any, T extends object = K>(A: T, B: T): T {
  for (const key in B) {
    if (B.hasOwnProperty(key)) {
      if (typeof B[key] === 'object' &&
        !Array.isArray(B[key]) &&
        typeof A[key] === 'object' &&
        !Array.isArray(A[key])) {
        // 如果 A 和 B 的值都是对象，递归合并
        (A[key] as T)= mergeObjects<K, T>(A[key] as T, B[key] as T);
      } else {
        // 否则，用 B 的值覆盖 A 的值，或者新增到 A
        A[key] = B[key];
      }
    }
  }
  return A;
}
