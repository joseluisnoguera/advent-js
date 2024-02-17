function manufacture(gifts, materials) {
    const regex = new RegExp(`^[${materials}]+${"$"}`)
    return gifts.filter(regex.test.bind(regex))
}
