module.exports = function toReadable (number) {
const digits = ['one', 'two', 'three', 'four', 'five',
                'six', 'seven', 'eight', 'nine', 'ten',
                'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

if (number === 0) {
    return 'zero';
}

let _number = number;
let result = '';
let nDigite = Math.floor(_number / 100);
if (nDigite > 0) {
    result += digits[nDigite - 1] + ' hundred';
    _number = _number - (nDigite * 100);    
}        

nDigite = Math.floor(_number / 10);
if ((nDigite >= 2)) {
    if (result.length > 0) {
        result += ' ';
    }
    result += tens[nDigite - 1];
    _number = _number - (nDigite * 10);    
}       

if (_number > 0) {
    if (result.length > 0) {
        result += ' ';
    }
    result += digits[_number - 1];     
    _number = _number - _number;
}

return result;
}
