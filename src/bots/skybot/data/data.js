export const getFlightsData = async (iata, direction) => {


  let sweets = [
    {
      name: "Sooji Halwa",
      image_url: "https://static.toiimg.com/photo/photo/96538829/96538829.jpg",
    },
    {
      name: "Gulab Jamun",
      image_url: "https://static.toiimg.com/photo/photo/96538839/96538839.jpg",
    },
    {
      name: "Motichoor Laddoo",
      image_url: "https://static.toiimg.com/photo/photo/96538812/96538812.jpg",
    },
    {
      name: "Kheer",
      image_url: "https://static.toiimg.com/photo/photo/96538778/96538778.jpg",
    },
  ];

  let cookies = [
    {
      name: "Gingerbread cookies",
      image_url:
        "https://www.cheryls.com/blog/wp-content/uploads/2021/11/4268183-gingerbread-1024x576.jpg.webp",
    },
    {
      name: "Chocolate chip cookies",
      image_url:
        "https://www.cheryls.com/blog/wp-content/uploads/2021/11/4268186-chocolate-chip-1024x576.jpg.webp",
    },
    {
      name: "Peanut butter cookies",
      image_url:
        "https://www.cheryls.com/blog/wp-content/uploads/2021/11/4268181-PeanutButter-1024x576.jpg.webp",
    },
    {
      name: "Oatmeal raisin cookies",
      image_url:
        "https://www.cheryls.com/blog/wp-content/uploads/2021/11/4268187-oatmeal-raisin-1024x576.jpg.webp",
    },
  ];
  let others = [
    {
      name: "Cheese",
      image_url:
        "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
    },
    {
      name: "Yogurt",
      image_url:
        "https://www.allrecipes.com/thmb/bRg6T06M92G2smbIuaiGsVc4U2s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1028395-authentic-homemade-yogurt-MTRmenian-4x3-1-0c66078e9bd64cada5606bf2d85db601.jpg",
    },
    {
      name: "Butter",
      image_url:
        "https://images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-butter-1296x728-feature.jpg",
    },
  ];


  switch (direction) {
    case "sweets":
      return sweets;
    case "cookies":
      return cookies;
    case "others":
      return others;
    default:
      return [];
  }
  // return data.flights.Flights;
};

export let allData = [
  {
    name: "Sooji Halwa",
    image_url: "https://static.toiimg.com/photo/photo/96538829/96538829.jpg",
  },
  {
    name: "Gulab Jamun",
    image_url: "https://static.toiimg.com/photo/photo/96538839/96538839.jpg",
  },
  {
    name: "Motichoor Laddoo",
    image_url: "https://static.toiimg.com/photo/photo/96538812/96538812.jpg",
  },
  {
    name: "kheer",
    image_url: "https://static.toiimg.com/photo/photo/96538778/96538778.jpg",
  },
  {
    name: "Gingerbread cookies",
    image_url:
      "https://www.cheryls.com/blog/wp-content/uploads/2021/11/4268183-gingerbread-1024x576.jpg.webp",
  },
  {
    name: "Chocolate chip cookies",
    image_url:
      "https://www.cheryls.com/blog/wp-content/uploads/2021/11/4268186-chocolate-chip-1024x576.jpg.webp",
  },
  {
    name: "Peanut butter cookies",
    image_url:
      "https://www.cheryls.com/blog/wp-content/uploads/2021/11/4268181-PeanutButter-1024x576.jpg.webp",
  },
  {
    name: "Oatmeal raisin cookies",
    image_url:
      "https://www.cheryls.com/blog/wp-content/uploads/2021/11/4268187-oatmeal-raisin-1024x576.jpg.webp",
  },
  {
    name: "Cheese",
    image_url:
      "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
  },
  {
    name: "Yogurt",
    image_url:
      "https://www.allrecipes.com/thmb/bRg6T06M92G2smbIuaiGsVc4U2s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1028395-authentic-homemade-yogurt-MTRmenian-4x3-1-0c66078e9bd64cada5606bf2d85db601.jpg",
  },
  {
    name: "Butter",
    image_url:
      "https://images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-butter-1296x728-feature.jpg",
  },
];

export const getFlight = (selectedFlightId) => {
  console.log(' ---selectedFlightId---> ', selectedFlightId);

  if (typeof selectedFlightId !== 'string') {
    return null; // or handle the case when selectedFlightId is not a string
  }

  const selectedWords = selectedFlightId?.split(' ');
  return allData.filter((flight) => selectedWords?.some(word => flight?.name?.toLowerCase().includes(word)))[0];
};

export const questionsData = [
  {
    "keyword": "lassi",
    "question": "can you suggest me lassi?",
    "answer": "Welcome! We offer a variety of lassi flavors including Rajavadi, Kesar Madhavi, Madhavi, and Mango Madhavi. Which would you like to try?"
  },
  {
    "keyword": "lassi made",
    "question": "what is lassi made of?",
    "answer": "Lassi typically consists of yogurt, water or milk, sweeteners like sugar or honey, and flavorings such as fruit or spices. It's blended together to create a refreshing and creamy drink"
  },
  {
    "keyword": "thabadi peda",
    "question": "what is price of thabadi peda ?",
    "answer": "Thabadi peda cost 447/-kg"
  },
  {
    "keyword": "dairy products",
    "question": "What types of dairy products do you offer?",
    "answer": "We offer dairy products like Lassi, Peda, Kesar Pista, Rich chocolate shake, Gulab jabun tin, Papdi, and all kinds of Namkeens"
  },
  {
    "keyword": "sourcing",
    "question": "Where do you source your dairy products from?",
    "answer": "We take pride in sourcing our dairy products from trusted local suppliers known for their commitment to quality and ethical practices."
  },
  {
    "keyword": "quality control",
    "question": "Can you tell me about your quality control measures?",
    "answer": "We maintain rigorous quality control measures to uphold the highest standards for our products."
  },
  {
    "keyword": "organic",
    "question": "Do you offer any organic or locally sourced options?",
    "answer": "Yes, we are proud to offer organic and locally sourced options for many of our products."
  },
  {
    "keyword": "best selling",
    "question": "What are your best-selling dairy products?",
    "answer": "Our all-time most selling item is Thabadi Peda, Maramari Special Limited."
  },
  {
    "keyword": "artisanal",
    "question": "Do you have any specialty or artisanal dairy items?",
    "answer": "Our artisanal dairy products are crafted with passion and expertise by skilled artisans."
  },
  {
    "keyword": "freshness",
    "question": "How do you ensure freshness and shelf-life of your products?",
    "answer": "We prioritize freshness and quality in all our products by implementing strict sourcing, efficient logistics, state-of-the-art facilities, optimal storage, and regular inspections."
  },
  {
    "keyword": "allergens",
    "question": "Are there any allergens present in your dairy products?",
    "answer": "Yes, some of our products may contain allergens such as nuts, soy, or gluten, depending on the recipe or flavor."
  },
  {
    "keyword": "bulk purchasing",
    "question": "Do you offer bulk purchasing options for businesses?",
    "answer": "Yes, we offer bulk purchasing options for businesses and provide competitive pricing and tailored solutions."
  },
  {
    "keyword": "pricing",
    "question": "Can you provide information on your pricing?",
    "answer": "Our pricing varies depending on factors such as the product, quantity ordered, and any customization or special requests."
  },
  {
    "keyword": "promotions",
    "question": "Do you have any current promotions or discounts on dairy products?",
    "answer": "At the moment, we don't have any specific promotions or discounts on dairy products."
  },
  {
    "keyword": "sales events",
    "question": "Are there any upcoming sales events I should know about?",
    "answer": "Check out our official Madhavi app for more information."
  },
  {
    "keyword": "loyalty rewards",
    "question": "Do you offer loyalty rewards for frequent customers?",
    "answer": "Yes, we offer a loyalty rewards program for frequent customers to earn points for every purchase they make."
  },
  {
    "keyword": "name",
    "question": "What is your name?",
    "answer": "I am Virtual Assistant Chatbot."
  },
  {
    "keyword": "contact details",
    "question": "Show me your contact details",
    "answer": "Email: care@madhvi.in, Location: Banas Dairy Rd, Chandralok Society, Shivam Nagar Society, Palanpur, Gujarat 385001, Contact: 9824051188"
  },
  {
    "keyword": "location",
    "question": "Show me the nearby location and merchant outlet",
    "answer": "NEARBY LOCATION: Banas Dairy Rd, Chandralok Society, Shivam Nagar Society, Palanpur, Gujarat 385001"
  }
]