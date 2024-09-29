import { describe, expect, test } from 'vitest';
import { b1, b2, example } from '.';

const title = 'Zod Level 3: バリデーションつきのスキーマをつくってみよう！';

describe(`${title}<<✅例題✅>>`, () => {
  describe('例題', () => {
    const schema = example();

    test('パスワードが一致する場合', () => {
      const match = schema.safeParse({
        password: 'password',
        confirm: 'password',
      });

      expect(match.success).toBeTruthy();
    });

    test('パスワードが一致しない場合', () => {
      const match = schema.safeParse({
        password: 'password',
        confirm: 'password2',
      });

      expect(match.success).toBeFalsy();
      expect(match.error?.errors[0]).toStrictEqual(
        expect.objectContaining({
          code: 'custom',
          message: 'パスワードが一致しません',
          path: ['confirm'],
        }),
      );
    });
  });
});

describe(`${title}<<👌基礎👌>>`, () => {
  describe('exampleRefine()と同じバリデーションをsuperRefineで書いてみよう', () => {
    const schema = b1();

    test('パスワードが一致する場合', () => {
      const match = schema.safeParse({
        password: 'password',
        confirm: 'password',
      });

      expect(match.success).toBeTruthy();
    });

    test('パスワードが一致しない場合', () => {
      const match = schema.safeParse({
        password: 'password',
        confirm: 'password2',
      });

      expect(match.success).toBeFalsy();

      expect(match.error?.errors[0]).toStrictEqual(
        expect.objectContaining({
          code: 'custom',
          message: 'パスワードが一致しません',
          path: ['confirm'],
        }),
      );
    });
  });

  describe(' value1,2,3でいずれかの値が重複したときにエラーメッセージ「{入力値}が重複しています」と出力しよう', () => {
    const schema = b2();

    test('すべて重複がない場合', () => {
      const match = schema.safeParse({
        value1: 'entered value 1',
        value2: 'entered value 2',
        value3: 'entered value 3',
      });

      expect(match.success).toBeTruthy();
    });

    test('value1,2が重複する場合', () => {
      const match = schema.safeParse({
        value1: 'entered value 1',
        value2: 'entered value 1',
        value3: 'entered value 3',
      });

      expect(match.success).toBeFalsy();
      expect(match.error?.errors[0]).toStrictEqual(
        expect.objectContaining({
          code: 'custom',
          message: '重複しています',
          path: ['value1'],
        }),
      );
      expect(match.error?.errors[1]).toStrictEqual(
        expect.objectContaining({
          code: 'custom',
          message: '重複しています',
          path: ['value2'],
        }),
      );
    });

    test('value1,2,3がすべて重複する場合', () => {
      const match = schema.safeParse({
        value1: 'entered value 1',
        value2: 'entered value 1',
        value3: 'entered value 1',
      });

      expect(match.success).toBeFalsy();
      expect(match.error?.errors[0]).toStrictEqual(
        expect.objectContaining({
          code: 'custom',
          message: '重複しています',
          path: ['value1'],
        }),
      );
      expect(match.error?.errors[1]).toStrictEqual(
        expect.objectContaining({
          code: 'custom',
          message: '重複しています',
          path: ['value2'],
        }),
      );
      expect(match.error?.errors[2]).toStrictEqual(
        expect.objectContaining({
          code: 'custom',
          message: '重複しています',
          path: ['value3'],
        }),
      );
    });
  });
});
