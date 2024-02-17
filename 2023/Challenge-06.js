function maxDistance(movements) {
    const a = movements.replaceAll(/[<>]/gi, "").length
    let t = 0
    const d = {
        "<": 1,
        ">": -1,
        "*": 0
    }
    for (const move of movements) {
        t += d[move]
    }
    return Math.abs(t) + a
}
