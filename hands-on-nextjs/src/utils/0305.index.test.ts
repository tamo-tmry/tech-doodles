import { RangeError, add } from "./0305.index"

// 以下のテストは失敗する
test('合計の上限は100である', () => {
    expect(() => add(-10, 110)).toThrow(RangeError)
})