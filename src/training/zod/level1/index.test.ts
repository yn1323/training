import { describe, expect, test } from 'vitest';
import { a1, b1, b2, b3, example, o1, o2 } from '.';

const str = 'string';
const number = 123;
const bool = true;

describe('Zod Level 1: スキーマを定義してみよう！<<👌基礎👌>>', () => {
  test('example', () => {
    const schema = example();
    expect(schema.safeParse(str).success).toBeTruthy();
    expect(schema.safeParse(number).success).toBeFalsy();
    expect(schema.safeParse(bool).success).toBeFalsy();
  });

  test('文字列型のスキーマを返却しよう', () => {
    const schema = b1();
    expect(schema.safeParse(str).success).toBeTruthy();
    expect(schema.safeParse(number).success).toBeFalsy();
    expect(schema.safeParse(bool).success).toBeFalsy();
  });

  test('数値型のスキーマを返却しよう', () => {
    const schema = b2();
    expect(schema.safeParse(str).success).toBeFalsy();
    expect(schema.safeParse(number).success).toBeTruthy();
    expect(schema.safeParse(bool).success).toBeFalsy();
  });

  test('真偽値型のスキーマを返却しよう', () => {
    const schema = b3();
    expect(schema.safeParse(str).success).toBeFalsy();
    expect(schema.safeParse(number).success).toBeFalsy();
    expect(schema.safeParse(bool).success).toBeTruthy();
  });
});

describe('Zod Level 1: スキーマを定義してみよう！<<🤯応用🤯>>', () => {
  test('文字列"tuna"のみ入るスキーマを返却しよう', () => {
    const schema = a1();
    expect(schema.safeParse('tuna').success).toBeTruthy();
    expect(schema.safeParse('fish').success).toBeFalsy();
  });
});

describe('Zod Level 1: スキーマを定義してみよう！<<👹鬼👹>>', () => {
  test('文字列配列のスキーマを返却しよう', () => {
    const schema = o1();
    expect(schema.safeParse([str]).success).toBeTruthy();
    expect(schema.safeParse([number]).success).toBeFalsy();
    expect(schema.safeParse([bool]).success).toBeFalsy();
  });

  test('数値配列のスキーマを返却しよう', () => {
    const schema = o2();
    expect(schema.safeParse([str]).success).toBeFalsy();
    expect(schema.safeParse([number]).success).toBeTruthy();
    expect(schema.safeParse([bool]).success).toBeFalsy();
  });
});
