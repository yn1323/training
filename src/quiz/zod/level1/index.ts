import z from 'zod';
/**
 * =====解説=====
 * スキーマを定義してみよう！
 *
 * zodでは、`z.xxx()`の形でスキーマ（型）を定義します。
 * 定義した型に対してsafeParseメソッドを利用して、値を検証することができます。
 * (safeParseメソッドはlevel2で詳しく解説します)
 *
 * ```
 * const schema = z.string(); // string型のスキーマを定義
 * const successResult = schema.safeParse('hello'); // 'hello'はstring型なので、result.successはtrueになります
 * console.log(successResult); // { success: true, data: "hello" }
 *
 * const failureResult = schema.safeParse(123); // 123はstring型ではないので、result.successはfalseになります
 * console.log(failureResult); // { success: false, error: ... }
 * ```
 *
 * ====問題====
 * `Q.`のあとの指示に従って、z.xxxx()の形でスキーマを定義してreturnしてみよう
 * `npm run test zod/level1`ですべてのテストが通ることを確認しよう
 *
 * ====ヒント====
 * https://zod.dev/?id=primitives
 *
 * ====解き方====
 * z.xxxxx()の`xxxx`部分のみ変更してください
 *
 */

// ==== <<✅例題✅>> ==== //
/**Q. 文字列型のスキーマを返却しよう */
export const example = () => {
  return z.string();
};

// ==== <<👌基礎👌>> ==== //
/**Q. 文字列型のスキーマを返却しよう */
export const b1 = () => {
  return z.string();
};

/** Q. 数値型のスキーマを返却しよう */
export const b2 = () => {
  return z.xxxx();
};

/** Q. 真偽値型のスキーマを返却しよう */
export const b3 = () => {
  return z.xxxx();
};

// ==== <<🤯応用🤯>> ==== //
/**
 * Q. 文字列["tuna"]のみ入るスキーマを返却しよう
 * 例: ["tuna"] => OK / ["fish"] => NG
 */
export const a1 = () => {
  return z.xxxx();
};

// ==== <<👹鬼👹>> ==== //
/**
 * Q. 文字列配列のスキーマを返却しよう
 * 例: ['a', 'b', 'c'] => OK / [1, 2, 3] => NG
 */
export const o1 = () => {
  return z.xxxx();
};

/**
 * Q. 数値配列のスキーマを返却しよう
 * 例: [1, 2, 3] => OK / ['a', 'b', 'c'] => NG
 */
export const o2 = () => {
  return z.xxxx();
};
