class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호 중복되지 않아야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
