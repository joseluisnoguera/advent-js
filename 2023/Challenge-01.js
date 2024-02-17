function findFirstRepeated(gifts) {
    return gifts[new Set(gifts).size] ?? -1
}
