//DONE

function unflat(src, count) {
    const result = [];
    for (let s = 0, e = count; s < src.length; s += count, e += count)
        result.push(src.slice(s, e));
    return result.map(e => e.reverse());
}

const func = (str) => {
    const [allSectors, allRazdel, ...sertorsOS] = str.split(' ')
    const osMap = new Map()
    const sectorsOsByGroup = unflat(sertorsOS, 2).reduce((acc, value, index) => {
        osMap.set(index, true)
        const [minSec, maxSec] = value.sort()

        const currSec = Array.from({ length: +maxSec - +minSec + 1}, (_, index) => +minSec + index)
        Array.from({ length: index}, (_, indexa) => {
            const hasRepeat = acc[indexa].some(e => currSec.includes(e))
            if (hasRepeat) {
                osMap.set(indexa, false)
            }
        })
        return [...acc, currSec]
    }, [])

    return Array.from(osMap.values()).filter(e => e).length
}

console.log(func('10 4 1 3 4 5 7 8 4 6'))