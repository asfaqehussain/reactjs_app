import { questionsData } from "./data/data";

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (message.includes("show")) {
      return this.actionProvider.handleProductMatch(message);
    }

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.includes("talk") ||
      message.includes("speak") ||
      message.includes("real person") ||
      message.includes("person")
      // ||
      // message.includes("contact")
    ) {
      return this.actionProvider.handleContactInfo();
    }
    // if (
    //   message.includes("1")
    // ) {
    //   return this.actionProvider.handleCustomInfo('one');
    // }
    // if (
    //   message.includes("2")
    // ) {
    //   return this.actionProvider.handleCustomInfo('two');
    // }

    let result = questionsData.find((item) => message.includes(item.keyword));
    if (result) {
      return this.actionProvider.handleCustomInfo(result.answer);
    }

    //   function getAnswer(message) {
    //     let result = questionsData.find(item => message.includes(item.keyword));
    //     return result ? result.answer : "Sorry, I couldn't find an answer to that question.";
    // }

    if (message.includes("flights") || message.includes("flight")) {
      return this.actionProvider.handleProductChoice();
    }

    if (message.includes("airport")) {
      return this.actionProvider.handleAirport();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
