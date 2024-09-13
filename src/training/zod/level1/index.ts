import z from 'zod';
/**
 * =====解説=====
 * スキーマを定義してみよう！
 *
 * zodでは、`z.xxx()`の形でスキーマ（型）を定義します。
 * 定義した型に対してsafeParseメソッドを利用して、値を検証することができます。
 *
 * ```
 * const schema = z.string(); // string型のスキーマを定義
 * const successResult = schema.safeParse('hello'); // 'hello'はstring型なので、result.successは成功します
 * console.log(successResult); // { success: true, data: "fish" }
 *
 * const failureResult = schema.safeParse(123); // 123はstring型ではないので、result.successは失敗します
 * console.log(failureResult); // { success: false, error: ... }
 * ```
 *
 * ====問題====
 * z.XXX()の形でスキーマを定義してreturnしてみよう
 *
 * ====ヒント====
 * https://zod.dev/?id=primitives
 *
 * ====解き方====
 * z.xxxxx()のxxxxの部分のみ変更してください
 *
 */

/**
 * Q. string型のスキーマを定義してみよう
 * ↓ z.xxxxx()のxxxxの部分のみ変更してください
 */
export const example = () => {
  return z.string();
};

// ==== <<👌基礎👌>> ==== //
/**Q. 文字列型のスキーマを返却しよう */
export const b1 = () => {
  return z.xxxx();
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
  return z.xxxx('tuna');
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
