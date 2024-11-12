const { odd, even } = require('./var');
const variables = require('./var');

function checkOddOrEven(num) {
    if (num % 2) {
        // return odd;
        return (variables.odd);
    }
    // return even;
    return (variables.even);
}

module.exports = checkOddOrEven;
