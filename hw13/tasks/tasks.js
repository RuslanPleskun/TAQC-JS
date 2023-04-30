class Tasks {
    add = (a, b) => { 
        const result = BigInt(a * 10 ** 18) + BigInt(b * 10 ** 18);
        return Number(result) / 10 ** 18;
    }
}

module.exports = new Tasks();