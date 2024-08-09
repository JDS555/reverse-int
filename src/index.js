module.exports = function reverse (number) {

    let reversed = 0;
    let numberLength = Math.floor(Math.log10(Math.abs(number))) + 1;

    for (let i = 0; i < numberLength; i++) {
        reversed = reversed * 10 + (Math.floor(Math.abs(number) / Math.pow(10, i))) % 10;
    }

    return reversed;
    
}
