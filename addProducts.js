let Models = require("./models");
const mongoose = require("mongoose");

// This is simply for testing purposes.

const products = [
  // Fruit Category
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Ripe Bananas",
    description: "Ripe and sweet bananas",
    image:
      "https://tastyvege.co.nz/cdn/shop/files/Screenshot2023-10-30101203.png?v=1698613953",
    price: 0.99,
    quantity: 100,
    category: "Fruit",
    deliveryMethod: "Delivery",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Juicy Oranges",
    description: "Juicy and sweet oranges",
    image: "https://www.saberhealth.com/uploaded/blog/images/Oranges.jpg",
    price: 1.49,
    quantity: 150,
    category: "Fruit",
    deliveryMethod: "Delivery",
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Sweet Strawberries",
    description: "Sweet and juicy strawberries",
    image:
      "https://foodal.com/wp-content/uploads/2015/03/Make-Strawberry-Season-Last-All-Year.jpg",
    price: 2.99,
    quantity: 100,
    category: "Fruit",
    deliveryMethod: "Delivery",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Crisp Apples",
    description: "Fresh and crisp apples",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/apples-700x350-edfec3b.png?quality=90&resize=556,505",
    price: 1.29,
    quantity: 120,
    category: "Fruit",
    deliveryMethod: "Pick-up",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Tangy Lemons",
    description: "Tangy and refreshing lemons",
    image:
      "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Fresh_Organic_Yellow_Lemons.jpg",
    price: 1.09,
    quantity: 90,
    category: "Fruit",
    deliveryMethod: "Shipping",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },

  // Vegetables Category
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Crunchy Carrots",
    description: "Fresh and crunchy carrots",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/carrots-royalty-free-image-1684505309.jpg?crop=0.68723xw:1xh;center,top&resize=640:*",
    price: 1.2,
    quantity: 130,
    category: "Vegetables",
    deliveryMethod: "Delivery",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Fresh Lettuce",
    description: "Green and fresh lettuce",
    image:
      "https://www.thespruce.com/thmb/sc3Fa6ZFN9MbYznpvFCZlVkSkcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-fresh-delicious-lettuce-1403404-3-0c9662567b52457a9f55828604f36b74.jpg",
    price: 0.99,
    quantity: 150,
    category: "Vegetables",
    deliveryMethod: "Pick-up",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Sweet Corn",
    description: "Sweet and delicious corn",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/stock%2FGettyImages-973555096-cropped",
    price: 1.5,
    quantity: 80,
    category: "Vegetables",
    deliveryMethod: "Shipping",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Juicy Tomatoes",
    description: "Red and juicy tomatoes",
    image:
      "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpg?itok=AFHF0CtR",
    price: 1.7,
    quantity: 110,
    category: "Vegetables",
    deliveryMethod: "Delivery",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Crispy Cucumbers",
    description: "Fresh and crispy cucumbers",
    image:
      "https://www.growforagecookferment.com/wp-content/uploads/2023/08/preserve-cucumbers-featured.jpg",
    price: 1.25,
    quantity: 90,
    category: "Vegetables",
    deliveryMethod: "Pick-up",
    location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },

  // Eggs Category
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Brown Eggs",
    description: "Nutritious brown eggs",
    image: "https://newengland.com/wp-content/uploads/2014/07/eggs-dt.jpg",
    price: 2.3,
    quantity: 180,
    category: "Eggs",
    deliveryMethod: "Pick-up",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "White Eggs",
    description: "High-quality white eggs",
    image: "https://assets.tendercuts.in/product/c/h/chk_egg.jpg",
    price: 2.2,
    quantity: 170,
    category: "Eggs",
    deliveryMethod: "Shipping",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },

  // Beef Category
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Premium Beef Steak",
    description: "High-quality beef steak",
    image:
      "https://cdn.shopify.com/s/files/1/0482/3233/articles/LoneMountainWagyu-seotool-64251-UnderstandingSteakCuts-BlogBanner1.jpg?v=1605801655",
    price: 10.5,
    quantity: 70,
    category: "Beef",
    deliveryMethod: "Delivery",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Ground Beef",
    description: "Freshly ground beef",
    image:
      "https://chefsmandala.com/wp-content/uploads/2018/03/Beef-Ground-II.jpg",
    price: 8.5,
    quantity: 100,
    category: "Beef",
    deliveryMethod: "Pick-up",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Beef Ribs",
    description: "Tender and juicy beef ribs",
    image: "https://heatherlea.ca/wp-content/uploads/2022/08/DSC_0219.jpg",
    price: 9.9,
    quantity: 80,
    category: "Beef",
    deliveryMethod: "Shipping",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Beef Brisket",
    description: "Delicious beef brisket",
    image:
      "https://thenorthernshopper.com/cdn/shop/products/51337_Beefbrisket_960x720.jpg?v=1685591014",
    price: 11.0,
    quantity: 60,
    category: "Beef",
    deliveryMethod: "Delivery",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Beef Tenderloin",
    description: "High-grade beef tenderloin",
    image:
      "https://girlcarnivore.com/wp-content/uploads/2022/12/How-to-trim-a-beef-tenderloin-5248.jpg",
    price: 12.5,
    quantity: 55,
    category: "Beef",
    deliveryMethod: "Pick-up",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },

  // Chicken Category
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Whole Chicken",
    description: "Fresh whole chicken",
    image: "https://www.greenag.com.au/assets/full/GAC2002.jpg?20230516121631",
    price: 7.0,
    quantity: 100,
    category: "Chicken",
    deliveryMethod: "Delivery",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Chicken Breast",
    description: "Boneless chicken breast",
    image:
      "https://joyce-farms.com/cdn/shop/products/naked_chicken_breast_new_2048x.jpeg?v=1600192812",
    price: 6.5,
    quantity: 120,
    category: "Chicken",
    deliveryMethod: "Pick-up",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Chicken Thighs",
    description: "Juicy chicken thighs",
    image:
      "https://www.themeathousemarket.com/cdn/shop/products/meats-chicken-thighs-raw-13984809025589_600x.png?v=1611210591",
    price: 6.0,
    quantity: 110,
    category: "Chicken",
    deliveryMethod: "Delivery",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },

  // Pork Category
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Pork Chops",
    description: "Tender pork chops",
    image:
      "https://www.hibbards.co.nz/wp-content/uploads/2021/08/Pork-Chop-4-1024x766.jpg",
    price: 8.5,
    quantity: 90,
    category: "Pork",
    deliveryMethod: "Delivery",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Pork Loin",
    description: "Juicy pork loin",
    image:
      "https://www.meatemporium.com.au/cdn/shop/products/JA_AME_Rolledporkloin_31.jpg?v=1631617038",
    price: 8.8,
    quantity: 80,
    category: "Pork",
    deliveryMethod: "Delivery",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
  {
    userId: "6582ba559d10c24ca2097855",
    username: "jespertjarnfors",
    productName: "Sausages",
    description: "Flavorful pork sausages",
    image:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/910f66781dedc33799c2faf15f68b5e8/Derivates/4ae3fe593cb4b333377cf6e949cd935fdac76349.jpg",
    price: 7.5,
    quantity: 100,
    category: "Pork",
    deliveryMethod: "Pick-up",
     location: {
      type: "Point",
      coordinates: [174.777101, -41.2898159],
    },
  },
];

mongoose
  .connect("mongodb://127.0.0.1:27017/FreshFindsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
    addProductsToDatabase();
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

const addProductsToDatabase = () => {
  products.forEach((productData) => {
    const newProduct = new Models.Product(productData);
    newProduct
      .save()
      .catch((error) => console.error("Error creating product:", error));
  });
};
