const func = (str) => {
    return str.split('').map((e, index) => {
        const ns = str
        const substring = ns.substring(index, str.length)
        const sArr = []

        substring.split('').forEach((_, index) => {
            sArr.push(substring.substring(0, substring.length - index))
        })
        console.log(sArr)
        return sArr.join('')
    })
        .join('')
        .split('')
        .reduce((acc, value) => {
            acc.set(value, (acc.get(value) || 0) + 1)

            return acc
        }, new Map())
}

console.log(func('abacaba'))