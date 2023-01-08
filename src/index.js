module.exports = function toReadable (number) {
  const numbers = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine',
    '10' : 'ten',
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' : 'nineteen',
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety',
    '100' : 'hundred',
    'multhundr' : 'hundreds',
}

if (number >= 0 && number <= 20) {
    return numbers[number]
}

else if (number > 20 && number < 100) {
    let firstNumber = number -number % 10;
    let secondNumber = number % 10;
    if (secondNumber == 0) {
        return numbers[firstNumber]
    }
    else {
        return numbers[firstNumber] + ' ' + numbers[secondNumber]
    }
}
else if (number >= 100 && number < 1000) {
    if (number % 100 === 0) {
        let hund = Math.floor (number/100);
       return  numbers[hund] + ' ' +  numbers[100];
    }
    else {
        let firstNumber = Math.floor (number/100);
        let helpN = Math.floor(number % 100);
        let thirdtNumber = Math.floor (number%10);

       if (helpN === 0) {
            return numbers[firstNumber] + ' ' +  numbers[100];
        }
        else if (helpN > 0){
            if (helpN <= 20  && helpN > 0) {
                return numbers[firstNumber] + ' ' +  numbers[100] + ' ' + numbers[helpN];
            }
            else if (thirdtNumber === 0){
                return numbers[firstNumber] + ' ' +  numbers[100] + ' ' + numbers[helpN];
            }
            else {
                return numbers[firstNumber] + ' ' +  numbers[100] + ' ' + numbers[helpN-thirdtNumber] + ' ' + numbers[thirdtNumber];
            }
        }
        
    }
}
}