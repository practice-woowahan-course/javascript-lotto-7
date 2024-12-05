import MainController from "./controller/MainController.js";

class App {
  async run() {
    const mainController = new MainController();
    await mainController.start();
  }
}

export default App;
