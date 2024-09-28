import { describe, expect, test } from 'vitest';
import { a1, b1, b2, b3, example, } from '.';
import { ZodError } from 'zod';

const title = "Zod Level 2: 作ったスキーマをparseしてみよう！"

describe(`${title}<<✅例題✅>>`, () => {
  test('例題', () => {
    const result = example();
    expect(result).toStrictEqual({ success: true, data: 'hello' });
  });
})

describe(`${title}<<👌基礎👌>>`, () => {

  test('Q. safeParseを利用して`{ success: true; data: 123 }`を返却しよう', () => {
    const result = b1();
    expect(result).toStrictEqual({ success: true, data: 123 });
  });

  test('Q. safeParseを利用して`{ success: true; data: true }`を返却しよう', () => {
    const result = b2();
    expect(result).toStrictEqual({ success: true, data: true });
  });

  test('Q. safeParseを利用して`{ success: false; error: ZodError }`を返却しよう', () => {
    const result = b3();
    expect(result.success).toBeFalsy()
    expect(result.error instanceof ZodError).toBeTruthy();
  });
});

describe(`${title}<<🤯発展🤯>>`, () => {
  test('Q. Zodのエラーメッセージ"Expected string, received array"から逆算してエラーを起こそう', () => {
    const result = a1();
    expect(result.success).toBeFalsy()
    expect(result.error instanceof ZodError).toBeTruthy();
    expect(result.error?.errors[0].message).toBe("Expected string, received array");
  });
});

