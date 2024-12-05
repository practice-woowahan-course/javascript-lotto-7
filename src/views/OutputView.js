import { MissionUtils } from "@woowacourse/mission-utils";

export default class OutputView {
    static printBuyAmount(lottoAmount) {
        MissionUtils.Console.print(`\n${lottoAmount}개를 구매했습니다.`);
    }

    static printRandomNumber(randomNumbers) {
        MissionUtils.Console.print(`[${randomNumbers.join(', ')}]`);
    }

    static printPrizeStats() {
        MissionUtils.Console.print(`\n당첨 통계\n---`);
    }

    static printRate(resultRate) {
        MissionUtils.Console.print(resultRate);
    }

}