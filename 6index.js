function unflat(src, count) {
    const result = [];
    for (let s = 0, e = count; s < src.length; s += count, e += count)
        result.push(src.slice(s, e));
    return result.map(e => e.reverse());
}

const func = (str) => {
    const [allSectors, allRazdel, ...sertorsOS] = str.split(' ')
    const sectorsOsByGroup = unflat(sertorsOS, 2).reduce((acc, value) => {
        const [minSec, maxSec] = value.sort()
        console.log(minSec, maxSec)
        return [...acc, Array.from({ length: +maxSec - +minSec + 1}, (_, index) => +minSec + index)]
    }, [])

    const colhoz = sectorsOsByGroup.map(arr => arr)

    return sectorsOsByGroup
}

console.log(func('10 3 1 3 4 7 3 4'))