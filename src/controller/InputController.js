import { MissionUtils } from "@woowacourse/mission-utils";
import Parser from "../utils/Parser.js";
import InputView from "../views/InputView.js";

class InputController {
    static async getLottoPurchaseAmount() {
        try {
            const inputPrice = await InputView.inputPrice();
            return [Parser.parseLottoAmountNumber(inputPrice), inputPrice];
        } catch (error) {
            MissionUtils.Console.print(error.message);
            return this.getLottoPurchaseAmount();
        }
    }

    static async getWinnerNumbers() {
        try {
            const inputWinnerNumbers = await InputView.inputWinnerNumbers();
            return Parser.parseWinnerNumbers(inputWinnerNumbers);
        } catch (error) {
            MissionUtils.Console.print(error.message);
            return this.getWinnerNumbers();
        }
    }

    static async getBonusNumber(winnerNumbers) {
        try {
            const inputBonusNumber = await InputView.inputBonusNumber();
            return Parser.parseBonusNumber(inputBonusNumber, winnerNumbers);
        } catch (error) {
            MissionUtils.Console.print(error.message);
            return this.getBonusNumber(winnerNumbers);
        }
    }
}

export default InputController;