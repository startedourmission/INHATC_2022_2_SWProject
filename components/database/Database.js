export const COLOURS = {
  white: "#ffffff",
  black: "#000000",
  green: "#00AC76",
  red: "#C04345",
  blue: "#0043F9",
  gray: "#808080",
  backgroundLight: "#F0F0F3",
  backgroundLightMedium: "#B0B3B9",
  backgroundMedium: "#B9B9B9",
  backgroundDark: "#777777",
};

export const Items = [
  {
    id: 1,
    category: "hoodie",
    productName: "Blue Hoodie",
    productPrice: 50000,
    description: "very warm | super gimotti | very cheap",
    isOff: true,
    productImage: require("../database/images/hoodie/hoodie1.jpg"),
    isAvaliable: true,
    productImageList: [
      require("./images/hoodie/hoodie1.jpg"),
      require("./images/hoodie/hoodie1_2.jpg"),
      require("./images/hoodie/hoodie1_3.jpg"),
    ],
  },
  {
    id: 2,
    category: "jacket",
    productName: "Black Jacket",
    productPrice: 38500,
    description: "very warm | super gimotti | very cheap",
    isAvaliable: false,
    isOff: true,
    productImage: require("../database/images/jacket/jacket1.jpg"),
    productImageList: [
      require("../database/images/jacket/jacket1.jpg"),
      require("../database/images/jacket/jacket1_2.jpg"),
      require("../database/images/jacket/jacket1_3.jpg"),
    ],
  },
  {
    id: 3,
    category: "pants",
    productName: "Brown Pants",
    productPrice: 30000,
    description: "very warm | super gimotti | very cheap",
    isOff: false,
    productImage: require("../database/images/pants/pants1.jpg"),
    isAvaliable: true,
    productImageList: [
      require("../database/images/pants/pants1.jpg"),
      require("../database/images/pants/pants1_2.jpg"),
      require("../database/images/pants/pants1_3.jpg"),
    ],
  },
  {
    id: 4,
    category: "hoodie",
    productName: "Khaki shirts",
    productPrice: 50000,
    description: "very warm | super gimotti | very cheap",
    isOff: true,

    productImage: require("../database/images/shirts/shirts1.jpg"),
    isAvaliable: true,
    productImageList: [
      require("../database/images/shirts/shirts1.jpg"),
      require("../database/images/shirts/shirts1_2.jpg"),
      require("../database/images/shirts/shirts1_3.jpg"),
    ],
  },
  {
    id: 5,
    category: "hoodie",
    productName: "Black Hoodie",
    productPrice: 30000,
    description: "very warm | super gimotti | very cheap",
    isOff: true,
    productImage: require("../database/images/hoodie/hoodie2.jpg"),
    isAvaliable: false,
    productImageList: [
      require("./images/hoodie/hoodie2.jpg"),
      require("./images/hoodie/hoodie2_2.jpg"),
      require("./images/hoodie/hoodie2_3.jpg"),
    ],
  },
  {
    id: 6,
    category: "jacket",
    productName: "Blue Jacket",
    productPrice: 70000,
    description: "very warm | super gimotti | very cheap",
    isOff: true,
    productImage: require("../database/images/jacket/jacket2.jpg"),
    isAvaliable: true,
    productImageList: [
      require("./images/jacket/jacket2.jpg"),
      require("./images/jacket/jacket2_2.jpg"),
      require("./images/jacket/jacket2_3.jpg"),
    ],
  },
  {
    id: 7,
    category: "pants",
    productName: "Black Pants",
    productPrice: 35000,
    description: "very warm | super gimotti | very cheap",
    isOff: true,
    productImage: require("../database/images/pants/pants2.jpg"),
    isAvaliable: false,
    productImageList: [
      require("./images/pants/pants2.jpg"),
      require("./images/pants/pants2_2.jpg"),
      require("./images/pants/pants2_3.jpg"),
    ],
  },
  {
    id: 8,
    category: "hoodie",
    productName: "Black Shirts",
    productPrice: 25000,
    description: "very warm | super gimotti | very cheap",
    isOff: true,
    productImage: require("../database/images/shirts/shirts2.jpg"),
    isAvaliable: false,
    productImageList: [
      require("./images/shirts/shirts2.jpg"),
      require("./images/shirts/shirts2_2.jpg"),
      require("./images/shirts/shirts2_3.jpg"),
    ],
  },
];
