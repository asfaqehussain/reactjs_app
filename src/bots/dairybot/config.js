import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import BranchSelector from "./widgets/BranchSelector/BranchSelector";
import DairySelector from "./widgets/DairySelector/DairySelector";
import DairyList from "./widgets/DairyList/DairyList";
import SingleProduct from "./widgets/SingleProduct/SingleProduct";
import GeneralOptions from "./widgets/GeneralOptions/GeneralOptions";
import ContactLink from "./widgets/Link/ContactLink";
import BotAvatar from "./domainComponents/BotAvatar";

const botName = "Virtual Assistant Chatbot";

const customQuestions = [
  {
    id: 1,
    question: "What is your name?",
    answer: "My name is CursorBot.",
  },
  {
    id: 2,
    question: "ab",
    answer: "I am doing well, thank you!",
  },
  // Add more custom questions and answers as needed
];

const config = {
  botName: botName,
  lang: "en",
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}.`),
    createChatBotMessage("Please select the branch you are looking for.", {
      widget: "branchSelector",
      delay: 500,
    }),
  ],
  state: {
    airports: [],
    selectedBranch: { iata: "OSL", nameCompact: "Palanpur" },
    flightType: "",
    selectedProductId: "",
    selectedFlight: null,
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "branchSelector",
      widgetFunc: (props) => <BranchSelector {...props} />,
      mapStateToProps: ["messages", "selectedBranch", "airports"],
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "productSelector",
      widgetFunc: (props) => <DairySelector {...props} />,
      mapStateToProps: ["selectedBranch"],
    },
    {
      widgetName: "productList",
      widgetFunc: (props) => <DairyList {...props} />,
      mapStateToProps: ["flightType", "selectedBranch"],
    },
    {
      widgetName: "singleProduct",
      widgetFunc: (props) => <SingleProduct {...props} />,
      mapStateToProps: [
        "selectedProductId",
        "selectedBranch",
        "selectedFlight",
      ],
    },

    {
      widgetName: "lostLuggageLink",
      widgetFunc: (props) => <ContactLink {...props} />,
    },
  ],

  // custom: customQuestions
};

export default config;
