function drawGift(size, symbol) {
    if (size === 1) return '#\n'
    let rs = `${"#".repeat(size)}\n`
    let r = `${" ".repeat(size - 1)}${rs}`
    let top = size - 2
    const face = symbol.repeat(top)
    const range = [...Array(top).keys()]

    for (const i of range) {
        r += `${" ".repeat(top - i)}#${face}#${symbol.repeat(i)}#\n`
    }

    r += `${"#".repeat(size)}${symbol.repeat(top)}#\n`

    for (const i of range) {
        r += `#${face}#${symbol.repeat(top - 1 - i)}#\n`
    }

    r += `${rs}`

    return r
}
