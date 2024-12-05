import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator.js";

class InputView {
    static async inputPrice() {
        const inputPrice = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
        return inputPrice;
    }

    static async inputWinnerNumbers() {
        const inputWinnerNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
        return inputWinnerNumbers;
    }

    static async inputBonusNumber() {
        const inputBonusNumber = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
        return inputBonusNumber;
    }
}

export default InputView;
