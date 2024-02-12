let a: unknown = 30
let b = a === 123
// let c = a + 10
if ( typeof a === 'number' ) {
    let d = a + 10
}

let a2: {
    b: number
    c?: string
    [key: number]: boolean
} = {
    b: 1,
}

let b2: {
    [key: string]: number
} = {}