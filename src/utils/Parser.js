import Validator from "./Validator.js"

class Parser {
    static parseLottoAmountNumber(input) {
        Validator.isEmpty(input);
        const inputNumber = Number(input);
        Validator.isNaturalNumber(inputNumber);
        Validator.isThousandMultiple(inputNumber);
        const lottoAmount = inputNumber / 1000;
        return lottoAmount;
    }

    static parseWinnerNumbers(inputStringArray) {
        Validator.isEmpty(inputStringArray);
        const splittedInput = inputStringArray.split(',');
        const parsedWinnerNumbers = splittedInput.map((value) => {
            Validator.isEmpty(value);
            const numberValue = Number(value.trim());
            Validator.isNaturalNumber(numberValue);
            Validator.isLottoRange(numberValue);
            return numberValue;
        });
        console.log(inputStringArray, parsedWinnerNumbers)
        return parsedWinnerNumbers;
    }

    static parseBonusNumber(input, inputStringArray) {
        Validator.isEmpty(input);
        const numberVal = Number(input)
        Validator.isNaturalNumber(numberVal);
        Validator.isLottoRange(numberVal);
        Validator.isDuplicateElement(numberVal, inputStringArray);
        return numberVal;
    }
}

export default Parser;