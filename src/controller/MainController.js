import InputController from "./InputController.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import AnnounceRate from "../models/AnnounceRate.js";
import CompareLotto from "../models/CompareLotto.js";
import OutputView from "../views/OutputView.js";
import Lotto from "../Lotto.js";

class MainController {
    async start() {
        const [lottoAmount, inputPrice] = await InputController.getLottoPurchaseAmount();
        const lottoList = [];

        OutputView.printBuyAmount(lottoAmount);
        for (let i = 0; i < lottoAmount; i++) {
            const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
            OutputView.printRandomNumber(randomNumbers);
            const lotto = new Lotto(randomNumbers);
            lottoList.push(lotto);
        }

        const winnerNumbers = await InputController.getWinnerNumbers();
        const inputBonusNumber = await InputController.getBonusNumber(winnerNumbers);
        const winningPrices = [];

        lottoList.forEach((lotto) => {
            const compareLotto = new CompareLotto(lotto.getNumbers(), winnerNumbers, inputBonusNumber)
            winningPrices.push(compareLotto.applyStandard());
        })
        OutputView.printPrizeStats();

        console.log(winningPrices, Number(inputPrice))

        const announceRate = new AnnounceRate(winningPrices, Number(inputPrice));
        announceRate.printWinningResult();
        announceRate.printRate();
    }
}

export default MainController;