export const add = (a: number, b: number) => {
    const sum = a + b
    if (sum > 100) {
        return 100
    }
    if (sum < 0) {
        return 0
    }
    return sum
}