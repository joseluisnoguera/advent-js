function createChristmasTree(ornaments, height) {
    let r = ''
    let char = 0
    for (let i = 1; i <= height; i++) {
        r += ' '.repeat(height - i)
        let arr = []
        for (let j = 0; j < i; j++) {
            arr.push(ornaments[char % ornaments.length])
            char++
        }
        r += arr.join(" ") + "\n"
    }

    return r + ' '.repeat(height - 1) + '|\n'
}
