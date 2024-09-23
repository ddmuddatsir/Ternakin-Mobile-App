/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "register";
const collection = "product";

// The current database to use.
use(database);

// Create a new collection.
db.getCollection(collection).insertMany([
  {
    title: "High-Quality Cow",
    price: 1000000,
    discPer: 10,
    rate: 4.5,
    sold: 150,
    image:
      "https://duniasapi.com/media/k2/items/cache/b262fcb3a88d76445a5d5d6ad933cf2d_XL.jpg",
    stock: 87,
    condition: "Good",
    minOrder: 1,
    shedPen: "Cow",
    advantages: [
      "Superior Quality: Selected from the best genetic stock with outstanding genetic potential.",
      "Optimal Maintenance: Fed high-quality nutrition and regular medical care.",
      "Health Guarantee: Free from infectious diseases and parasites.",
      "Rapid Growth: Potential for high weight gain in a short period.",
      "Ease of Maintenance: Suitable for large or small-scale operations, with maintenance guidelines provided.",
    ],
    shippingMethod: null,
    farm: null,
  },
  {
    title: "Premium Dairy Goat",
    price: 750000,
    discPer: 5,
    rate: 4.7,
    sold: 120,
    image:
      "https://assets.goal.com/images/v3/blt23d16aec048da9cc/6fea418196b90af4e0c11ead2d0ab883678f3431.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    stock: 45,
    condition: "Sent to Sukabumi",
    minOrder: 1,
    shedPen: "Goat",
    advantages: [
      "High Milk Yield: Proven to produce high quantities of quality milk.",
      "Excellent Genetics: Comes from a lineage with superior dairy traits.",
      "Disease Resistance: Raised in controlled environments to minimize health risks.",
      "Adaptability: Suitable for various climates and farming systems.",
      "Easy Care: Minimal veterinary care required due to robust health.",
    ],
    shippingMethod: null,
    farm: null,
  },
  {
    title: "Organic Chicken",
    price: 500000,
    discPer: 8,
    rate: 4.6,
    sold: 200,
    image: "https://images.unsplash.com/photo-1591325510164-3e1d0c9b5e7b",
    stock: 60,
    condition: "Fresh",
    minOrder: 2,
    shedPen: "Chicken",
    advantages: [
      "Hormone-Free: Raised without growth hormones or antibiotics.",
      "Free-Range: Chickens are raised in a free-range environment for natural behavior.",
      "Nutritious: Rich in vitamins and minerals due to organic feed.",
      "Sustainable: Environmentally friendly farming practices.",
      "High Quality: Tender and flavorful meat.",
    ],
    shippingMethod: null,
    farm: null,
  },
  {
    title: "Premium Pork",
    price: 850000,
    discPer: 7,
    rate: 4.8,
    sold: 180,
    image: "https://images.unsplash.com/photo-1589309509783-058743d6405b",
    stock: 50,
    condition: "Frozen",
    minOrder: 1,
    shedPen: "Pork",
    advantages: [
      "High Quality: Meat is tender and has a good flavor.",
      "Well-Marbled: Balanced fat distribution for better taste.",
      "Sustainably Raised: Farmed using eco-friendly methods.",
      "Nutrient-Rich: High in protein and essential vitamins.",
      "Traceable: Source information available for transparency.",
    ],
    shippingMethod: null,
    farm: null,
  },
  {
    title: "Wooly Sheep",
    price: 1200000,
    discPer: 12,
    rate: 4.9,
    sold: 90,
    image: "https://images.unsplash.com/photo-1568252658-03d6d09c0e63",
    stock: 40,
    condition: "Healthy",
    minOrder: 1,
    shedPen: "Sheep",
    advantages: [
      "Premium Wool: High-quality wool for various textile uses.",
      "Good Health: Raised in a controlled environment with regular check-ups.",
      "Rapid Growth: Fast-growing breed with good wool yield.",
      "Adaptable: Can thrive in different climates.",
      "Low Maintenance: Requires less care compared to other breeds.",
    ],
    shippingMethod: null,
    farm: null,
  },
  {
    title: "Healthy Turkey",
    price: 600000,
    discPer: 6,
    rate: 4.4,
    sold: 95,
    image: "https://images.unsplash.com/photo-1601590563378-6f1d4052aa44",
    stock: 55,
    condition: "Fresh",
    minOrder: 1,
    shedPen: "Turkey",
    advantages: [
      "Lean Meat: Lower fat content compared to other poultry.",
      "Flavorful: Rich taste that enhances any dish.",
      "Sustainably Raised: Raised with eco-friendly practices.",
      "High Protein: Excellent source of high-quality protein.",
      "Health Benefits: Beneficial for heart health and muscle maintenance.",
    ],
    shippingMethod: null,
    farm: null,
  },
  {
    title: "Exotic Duck",
    price: 700000,
    discPer: 9,
    rate: 4.3,
    sold: 80,
    image: "https://images.unsplash.com/photo-1590854373726-fbe4ea8fdce6",
    stock: 70,
    condition: "Frozen",
    minOrder: 1,
    shedPen: "Duck",
    advantages: [
      "Unique Flavor: Distinct taste compared to standard poultry.",
      "Premium Quality: Raised under ideal conditions for the best meat quality.",
      "Rich in Nutrients: High levels of essential vitamins and minerals.",
      "Versatile: Suitable for a variety of cooking methods.",
      "Sustainably Sourced: Environmentally conscious farming practices.",
    ],
    shippingMethod: null,
    farm: null,
  },
]);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
