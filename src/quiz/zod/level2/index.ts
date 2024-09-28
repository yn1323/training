/**
 * ====解説====
 * 作ったスキーマをparseしてみよう！
 *
 * 作成したスキーマ(型定義)をparseすることで、型定義に沿っているかどうかを検証することができます。
 * parseするメソッドは`parse`と`safeParse`の2つがあります。
 * 
 * ```
 * const stringSchema = z.string();
 * stringSchema.parse("fish"); // => returns "fish"
 * stringSchema.parse(12); // throws error
 * 
 * stringSchema.safeParse(12);
 * // => { success: false; error: ZodError }
 * stringSchema.safeParse("billie");
 * // => { success: true; data: 'billie' }
 * ```
 * 
 * 型エラー発生時の動作が一番の違いです。
 * `parse`・・・parseに失敗した場合、errorをthrowします
 * `safeParse`・・・parseに失敗した場合、errorメッセージを返します
 * 
 * プロジェクトでは主に`safeParse`を利用します。
 *
 * ====問題====
 * `Q.`のあとの指示に従って、z.xxxx()の形でスキーマを定義してreturnしてみよう
 * `npm run test zod/level2`ですべてのテストが通ることを確認しよう
 *
 * ====ヒント====
 * https://zod.dev/?id=safeparse
 *
 */

import z from 'zod';

// ==== <<✅例題✅>> ==== //
/**Q. safeParseを利用して、`{ success: true; data: "hello" }`を返却しよう */
export const example = () => {
  const schema = z.string();
  return schema.safeParse('hello');
};

// ==== <<👌基礎👌>> ==== //
/**Q. safeParseを利用して`{ success: true; data: 123 }`を返却しよう */
export const b1 = () => {
  const schema = z.xxxx();
  return schema.safeParse(xxxx);
};

/**Q. safeParseを利用して`{ success: true; data: true }`を返却しよう */
export const b2 = () => {
  const schema = z.xxxx();
  return schema.safeParse(xxxx);
};

/**Q. safeParseを利用して`{ success: false; error: ZodError }`を返却しよう
 * ※ZodErrorはzodのエラーオブジェクト（中身は何でもOK）
 */
export const b3 = () => {
  const schema = z.xxxx();
  return schema.safeParse(xxxx);
};

// ==== <<🤯発展🤯>> ==== //
/**
 * Q. Zodのエラーメッセージ"Expected string, received array"から逆算してエラーを起こそう
 */
export const a1 = () => {
  const schema = z.xxxx();
  return schema.safeParse(xxxx);
};
