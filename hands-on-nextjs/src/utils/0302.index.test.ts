import {add } from './0302.index'

describe('add', () => {
    test('1 + 1 = 2', () => {
        expect(add(1,1)).toBe(2)
    })
test('add: 1 + 2 = 3', () => {
    expect(add(1,2)).toBe(3)
})
})
