function findNaughtyStep(original, modified) {
    const [large, short] = (original.length > modified.length)
        ? [original, modified]
        : [modified, original]
    return large.split("").find((v, i) => v !== short[i]) ?? ""
}
