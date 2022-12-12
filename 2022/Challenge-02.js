function countHours(year, holidays) {
    const d = new Date()
    d.setFullYear(year)
    let total = 0
    for (const holiday of holidays) {
        d.setDate(holiday.substr(3, 2))
        d.setMonth(Number(holiday.substr(0, 2)) - 1)
        const day = d.getDay()
        total += (day > 0 && day < 6) ? 2 : 0
    }
    return total
}