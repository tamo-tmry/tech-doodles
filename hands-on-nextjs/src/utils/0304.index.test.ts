import { add } from "./0304.index"

test('返り値は、第一引数と第二引数の和である', () => {
    expect(add(50, 50)).toBe(100)
})
test('合計の上限は100である', () => {
    expect(add(70, 80)).toBe(100)
})
test('合計の下限は0である', () => {
    expect(add(-20, 10)).toBe(0)
})