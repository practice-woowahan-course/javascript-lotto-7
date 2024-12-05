const Validator = {
    isThousandMultiple: (input) => {
        if (input % 1000 !== 0) {
            throw new Error(`[ERROR] 끝자리는 1000으로 나누어 떨어져야 합니다.`);
        }
    },
    isEmpty: (input) => {
        if (input.trim() === '') {
            throw new Error(`[ERROR] 빈 숫자는 허용되지 않습니다.`);
        }
    },
    isNaturalNumber: (input) => {
        if (isNaN(input) || input <= 0 || !Number.isInteger(input)) {
            throw new Error(`[ERROR] 자연수만 입력해주세요.`);
        }
    },
    isLottoRange: (input) => {
        if (1 > input || input > 45){
            throw new Error(`[ERROR] 로또 숫자 범위 초과했습니다.`);
        }
    },
    isDuplicateElement: (input, inputArray) => {
        if (inputArray.includes(input)){
            throw new Error(`[ERROR] 보너스 로또가 중복되었습니다.`);
        }
    }
}

export default Validator;