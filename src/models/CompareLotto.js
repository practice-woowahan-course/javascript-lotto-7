class CompareLotto {
    #winStandard = {
        1: 2_000_000_000,
        2: 30_000_000,
        3: 1_500_000,
        4: 50_000,
        5: 5_000,
        0: 0,
    };

    constructor(lottoOneLine, winNumber, bonusNumber){
        this.lottoOneLine = lottoOneLine;
        this.winNumber = winNumber;
        this.bonusNumber = bonusNumber;
    }

    compare() {
        const corrects = this.lottoOneLine.filter((number) => this.winNumber.includes(number));
        const isBonus = this.lottoOneLine.includes(this.bonusNumber);
        return [corrects.length, isBonus];
    }

    applyStandard() {
        const [correctCount, isBonus] = this.compare();
        if(correctCount < 3) {
            return this.#winStandard[0];
        }
        if(correctCount === 6){
            return this.#winStandard[1];
        }

        if(isBonus && correctCount === 5){
            return this.#winStandard[2];
        }

        return this.#winStandard[8-correctCount];
    }

}

export default CompareLotto;