module.exports = function reverse(n) {
    const absoluteValue = Math.abs(n);
    const reversedNumber = Number(absoluteValue.toString().split('').reverse().join(''));
    return reversedNumber;
}