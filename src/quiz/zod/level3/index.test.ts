import { describe, expect, test } from 'vitest';
import { a1, a2, a3, b1, b2, b3, b4, b5, example, o1 } from '.';

const title = 'Zod Level 3: バリデーションつきのスキーマをつくってみよう！';

describe(`${title}<<✅例題✅>>`, () => {
  test('例題', () => {
    const schema = example();
    expect(schema.safeParse('aa').success).toBeTruthy();
    expect(schema.safeParse('aaa').success).toBeFalsy();
  });
});

describe(`${title}<<👌基礎👌>>`, () => {
  test('Q. 長さが最大10、最小5となる文字列のスキーマをつくろう', () => {
    const schema = b1();
    expect(schema.safeParse('a'.repeat(4)).success).toBeFalsy();
    expect(schema.safeParse('a'.repeat(5)).success).toBeTruthy();
    expect(schema.safeParse('a'.repeat(10)).success).toBeTruthy();
    expect(schema.safeParse('a'.repeat(11)).success).toBeFalsy();
  });
  test(`Q. 'https://'始まるの文字列のみ許容するスキーマをつくろう`, () => {
    const schema = b2();
    expect(schema.safeParse('https://dsdasdas').success).toBeTruthy();
    expect(schema.safeParse('http://dsdasdas').success).toBeFalsy();
    expect(schema.safeParse('aaaa-https://').success).toBeFalsy();
  });
  test('Q. 最大10、最小5となる数値型のスキーマをつくろう', () => {
    const schema = b3();
    expect(schema.safeParse(4).success).toBeFalsy();
    expect(schema.safeParse(5).success).toBeTruthy();
    expect(schema.safeParse(10).success).toBeTruthy();
    expect(schema.safeParse(11).success).toBeFalsy();
  });
  test('Q.  0と正の数を許容する数値型のスキーマをつくろう', () => {
    const schema = b4();
    expect(schema.safeParse(-1).success).toBeFalsy();
    expect(schema.safeParse(0).success).toBeTruthy();
    expect(schema.safeParse(1).success).toBeTruthy();
  });
  test('Q. 長さが5となる数値型配列のスキーマをつくろう', () => {
    const schema = b5();
    expect(schema.safeParse([0, 0, 0, 0]).success).toBeFalsy();
    expect(schema.safeParse([0, 0, 0, 0, 0]).success).toBeTruthy();
    expect(schema.safeParse([0, 0, 0, 0, 0, 0]).success).toBeFalsy();
  });
});

describe(`${title}<<🤯発展🤯>>`, () => {
  test('Q. 文字列"fish","chicken","pork"のみ許容する文字列のスキーマをつくろう', () => {
    const schema = a1();
    expect(schema.safeParse('fish').success).toBeTruthy();
    expect(schema.safeParse('pork').success).toBeTruthy();
    expect(schema.safeParse('chicken').success).toBeTruthy();

    expect(schema.safeParse('fish2').success).toBeFalsy();
    expect(schema.safeParse('-pork').success).toBeFalsy();
    expect(schema.safeParse('chick').success).toBeFalsy();
  });

  test('Q. 文字列、または`undefined`のみ許容するスキーマをつくろう', () => {
    const schema = a2();
    expect(schema.safeParse('').success).toBeTruthy();
    expect(schema.safeParse('pork').success).toBeTruthy();
    expect(schema.safeParse(undefined).success).toBeTruthy();
    expect(schema.safeParse(null).success).toBeFalsy();
  });
  test('Q. 文字列、または`null`のみ許容するスキーマをつくろう', () => {
    const schema = a3();
    expect(schema.safeParse('').success).toBeTruthy();
    expect(schema.safeParse('pork').success).toBeTruthy();
    expect(schema.safeParse(undefined).success).toBeFalsy();
    expect(schema.safeParse(null).success).toBeTruthy();
  });
});

describe(`${title}<<👹鬼👹>>`, () => {
  test('Q.次のバリデーションを持つオブジェクトのスキーマをつくろう', () => {
    const schema = o1();

    const nameSchema = schema.shape.name;
    expect(nameSchema.safeParse('a'.repeat(4)).success).toBeFalsy();
    expect(nameSchema.safeParse('a'.repeat(5)).success).toBeTruthy();
    expect(nameSchema.safeParse('a'.repeat(10)).success).toBeTruthy();
    expect(nameSchema.safeParse('a'.repeat(11)).success).toBeFalsy();

    const ageSchema = schema.shape.age;
    expect(ageSchema.safeParse(30).success).toBeTruthy();
    expect(ageSchema.safeParse('30').success).toBeFalsy();
    expect(ageSchema.safeParse(undefined).success).toBeFalsy();

    const genderSchema = schema.shape.gender;
    expect(genderSchema.safeParse('a'.repeat(10)).success).toBeTruthy();
    expect(genderSchema.safeParse('a'.repeat(11)).success).toBeFalsy();
    expect(genderSchema.safeParse('').success).toBeTruthy();

    const agreeSchema = schema.shape.agree;
    expect(agreeSchema.safeParse(true).success).toBeTruthy();
    expect(agreeSchema.safeParse(false).success).toBeTruthy();
  });
});
