import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView.js";

class AnnounceRate {
    #messages = [
        "3개 일치 (5,000원) - ",
        "4개 일치 (50,000원) - ",
        "5개 일치 (1,500,000원) - ",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
        "6개 일치 (2,000,000,000원) - ",
    ]

    #winningAmounts = {
        5_000: 0,
        50_000: 0,
        1_500_000: 0,
        30_000_000: 0,
        2_000_000_000: 0,
        0: 0,
    };
    #totalMoney = 0;

    constructor(moneyList, inputMoney) {
        this.moneyList = moneyList;
        this.inputMoney = inputMoney;
    }

    calculateWinningAmounts() {
        this.moneyList.forEach((money) => {
            this.#totalMoney += money;
            this.#winningAmounts[money]++
        });
    }

    printWinningResult() {
        this.calculateWinningAmounts();
        const winnings = [5000, 50000, 1500000, 30000000, 2000000000];
        
        for (const [money, count] of Object.entries(this.#winningAmounts)) {
            if (money === '0') continue;
            const index = winnings.indexOf(Number(money));
            MissionUtils.Console.print(`${this.#messages[index]}${count}개`);
        }
    }

    calculateRate() {
        return this.#totalMoney / this.inputMoney * 100;
    }

    printRate() {
        const resultRate = this.calculateRate();
        const message = `총 수익률은 ${resultRate}%입니다.`;
        OutputView.printRate(message);
    }
}

export default AnnounceRate;