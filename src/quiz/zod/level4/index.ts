/**
 * ====解説====
 * 自作カスタムバリデーションつきのスキーマをつくってみよう！
 *
 * zod標準のバリデーションでは足りない場合、カスタムバリデーションを追加することができます。
 * カスタムバリデーションを実装する関数に`refine`, `superRefine`があります。
 * 主に複数フィールド間で値をチェックするときに利用します。
 *
 * `refine`・・・エラーメッセージをシンプルにカスタマイズすることができます。
 * `superRefine`・・・エラーメッセージに加え、ZodErrorの詳細情報を追加することができます。
 *
 * 基本は`refine`, エラーメッセージの詳細情報が必要な場合は`superRefine`を利用します。
 *
 * ====問題====
 * `Q.`のあとの指示に従って、カスタムバリデーションをつくろう
 * `npm run test zod/level4`ですべてのテストが通ることを確認しよう
 *
 * ====ヒント====
 * https://zod.dev/?id=refine
 * https://zod.dev/?id=superrefine
 *
 */

import z from 'zod';

/**
 * Q. パスワードと確認用パスワードが一致しない場合に「パスワードが一致しません」と出力しよう
 * また、エラーメッセージはconfirmフィールドのみに追加しよう
 */
export const exampleRefine = () => {
  const passwordFormSchema = z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: 'パスワードが一致しません',
      path: ['confirm'], // confirmフィールドにエラーを追加
    });

  return passwordFormSchema;
};

// ==== <<👌基礎👌>> ==== //
/**Q. exampleRefine()と同じバリデーションをsuperRefineで書いてみよう */
export const b1 = () => {
  const passwordFormSchema = z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .superRefine(/* ここを修正する */);

  return passwordFormSchema;
};

/**
 * Q. value1,2の値が一致したときにエラーメッセージ「{入力値}が重複しています」と出力しよう
 * エラーメッセージはvalue1,2療法のフィールドに追加しよう
 */
export const b2 = () => {
  const valueFormSchema = z
    .object({
      value1: z.string(),
      value2: z.string(),
    })
    .refine(/* ここを修正する */); // superRefineでもOK

  return valueFormSchema;
};

// ==== <<🤯発展🤯>> ==== //
/**
 * Q. Exampleと同じ条件のスキーマを関数に切り出して、再利用可能なカスタムバリデーションを作成しよう
 */
export const a1 = () => {
  const passwordMatch =
    () => (data: { password: string; confirm: string }) => ({
      message: 'パスワードが一致しません',
    });

  const passwordFormSchema = z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .refine(passwordMatch);

  return passwordFormSchema;
};
