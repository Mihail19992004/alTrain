//NEED TESTS

const func = (studentCount, variantCount, nomerRyadaOfPetya, sideOfPetya) => {
    const orderVariants = cyrcleVarian(variantCount, studentCount - 1)
    const placeOfPetya =  nomerRyadaOfPetya - 1
    const variantOfPetya = orderVariants[nomerRyadaOfPetya - 1][sideOfPetya - 1]
    return findNextPlaceWithSameVariant(orderVariants, placeOfPetya, variantOfPetya)
}

function unflat(src, count) {
    const result = [];
    for (let s = 0, e = count; s < src.length; s += count, e += count)
        result.push(src.slice(s, e));
    return result.map(e => e.reverse());
}

const cyrcleVarian = (variantCount, studentCount) => {
    return unflat(Array.from({ length: studentCount}, (_, index) => {
        return  (index % variantCount) + 1
    }), 2)
}

const findNextPlaceWithSameVariant = (orderVariants, placeOfPetya, variantOfPetya) => {
    const a = orderVariants.reduce((acc, arr, index) => {

        if (acc !== -1) {
            return acc
        }
        if (index > placeOfPetya && arr.includes(variantOfPetya) ) {
            return {indexRyada: index + 1, side: arr[0] === variantOfPetya ? 1 : 2}
        }

        return acc
    }, -1)

    return a !== -1 ? a.indexRyada + ' ' + a.side : a
}


console.log(func(25, 2, 1, 2))