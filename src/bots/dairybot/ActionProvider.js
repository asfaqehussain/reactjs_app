class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleContactInfo = () => {
    const message = this.createChatBotMessage(
      "If you need to speak to a real person, you can call +91 91 67 03 00 00 OR email at care@madhvi.com",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };
  handleCustomInfo = (answer) => {
    const message = this.createChatBotMessage(answer, {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    this.addMessageToState(message);
  };
  handleManageParking = () => {
    const message = this.createChatBotMessage(
      "Here's a link to Avinors manage parking pages.",
      {
        widget: "manageParkingLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleLostLuggage = () => {
    const message = this.createChatBotMessage(
      "Here's a link to contact us pages.",
      {
        widget: "lostLuggageLink",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleAirport = () => {
    const message = this.createChatBotMessage("Do you need to switch branch?", {
      widget: "branchSelector",
      loading: true,
      terminateLoading: true,
    });

    this.addMessageToState(message);
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "options",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    this.addMessageToState(message);
  };

  handleProductChoice = () => {
    const message = this.createChatBotMessage(
      "Awesome. I just need a little more information",
      {
        widget: "productSelector",
        withAvatar: true,
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };

  handleDairyTypeChoice = (type) => {
    const message = this.createChatBotMessage(
      `Thanks. I'll retrieve the ${type} items. If you want details of the item, Show me the details of 'product name'.`,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: "productList",
      }
    );

    this.addMessageToState(message);
  };

  handleProductMatch = (ProductId) => {
    const message = this.createChatBotMessage(
      `Here's what I found for this flight.`,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: "singleProduct",
      }
    );

    this.setState((state) => ({
      ...state,
      selectedProductId: ProductId,
      messages: [...state.messages, message],
    }));
  };

  handleFlightNotFound = () => {
    const message = this.createChatBotMessage(
      `Sorry, couldn't find anything for that flight.`,
      {
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
