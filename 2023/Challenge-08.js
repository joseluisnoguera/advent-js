function adjustLights(lights) {
    return Math.min(...(lights.reduce((acc, cur, i) => {
        const isOdd = i % 2 === 0
        const isRed = cur === '🔴'
        acc[0] += ((isOdd && isRed) || (!isOdd && !isRed)) ? 1 : 0
        acc[1] += ((isOdd && !isRed) || (!isOdd && isRed)) ? 1 : 0
        return acc
    }, [0, 0])))
}
