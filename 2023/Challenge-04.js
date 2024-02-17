function decode(message) {
    let pOpen = message.lastIndexOf("(");
    while (pOpen !== -1) {
        let pClose = pOpen + 1;
        let lvl = 0;
        while (pClose < message.length && lvl < 1 && message[pClose] !== ")") {
            message[pClose] === "(" && lvl++;
            message[pClose] === ")" && lvl--;
            pClose++;
        }
        pClose++;
        const cipher = message.substring(pOpen, pClose);
        const decipher = cipher
            .split("")
            .reverse()
            .join("")
            .substring(1, cipher.length - 1);
        message = message.replace(cipher, decipher);
        pOpen = message.lastIndexOf("(");
    }
    return message;
}
