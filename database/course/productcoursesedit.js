/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "register";
const collection = "productcourses";

// The current database to use.
use(database);

// Create a new collection.
db.getCollection(collection).insertMany([
  {
    title: "Mastering Cattle Farming",
    description:
      "Learn the essential skills and strategies for successful cattle farming.",
    price: 500000,
    category: "Cow",
    level: "Beginner",
    videoContent: [
      {
        title: "Introduction to Cattle Farming",
        duration: 15,
        url: "https://example.com/videos/cattle-intro",
      },
      {
        title: "Feeding Techniques for Cows",
        duration: 30,
        url: "https://example.com/videos/cattle-feeding",
      },
    ],
    author: {
      name: "John Doe",
      bio: "Expert in cattle farming with over 20 years of experience.",
      profilePicture: "https://example.com/images/john-doe.jpg",
    },
    thumbnail: "https://example.com/images/cattle-course.jpg",
    reviews: [],
    totalEnrollments: 120,
  },
  {
    title: "Chicken Farming for Beginners",
    description: "Step-by-step guide to raising chickens for meat and eggs.",
    price: 350000,
    category: "Chicken",
    level: "Beginner",
    videoContent: [
      {
        title: "Introduction to Chicken Farming",
        duration: 10,
        url: "https://example.com/videos/chicken-intro",
      },
      {
        title: "Chicken Coop Design",
        duration: 25,
        url: "https://example.com/videos/chicken-coop",
      },
    ],
    author: {
      name: "Jane Smith",
      bio: "Professional poultry farmer and trainer.",
      profilePicture: "https://example.com/images/jane-smith.jpg",
    },
    thumbnail: "https://example.com/images/chicken-course.jpg",
    reviews: [
      {
        userId: "6483bcf4e8a29b3c4d9a5678",
        comment: "Very informative and easy to follow.",
        rating: 5,
        createdAt: "2024-10-20T14:00:00Z",
      },
    ],
    totalEnrollments: 300,
  },
  {
    title: "Advanced Duck Farming Techniques",
    description: "Learn advanced techniques to optimize duck farming.",
    price: 450000,
    category: "Duck",
    level: "Advanced",
    videoContent: [
      {
        title: "Duck Breeding Essentials",
        duration: 40,
        url: "https://example.com/videos/duck-breeding",
      },
      {
        title: "Disease Management for Ducks",
        duration: 35,
        url: "https://example.com/videos/duck-disease-management",
      },
    ],
    author: {
      name: "David Lee",
      bio: "Veterinarian specializing in duck farming.",
      profilePicture: "https://example.com/images/david-lee.jpg",
    },
    thumbnail: "https://example.com/images/duck-course.jpg",
    reviews: [],
    totalEnrollments: 80,
  },
  {
    title: "Sheep Farming 101",
    description: "Comprehensive guide to raising and caring for sheep.",
    price: 400000,
    category: "Sheep",
    level: "Intermediate",
    videoContent: [
      {
        title: "Basics of Sheep Farming",
        duration: 20,
        url: "https://example.com/videos/sheep-basics",
      },
      {
        title: "Shearing and Wool Management",
        duration: 25,
        url: "https://example.com/videos/sheep-shearing",
      },
    ],
    author: {
      name: "Emily White",
      bio: "Sheep farming expert and consultant.",
      profilePicture: "https://example.com/images/emily-white.jpg",
    },
    thumbnail: "https://example.com/images/sheep-course.jpg",
    reviews: [],
    totalEnrollments: 150,
  },
  {
    title: "Goat Farming for Profit",
    description: "Learn how to maximize profits in goat farming.",
    price: 550000,
    category: "Goat",
    level: "Advanced",
    videoContent: [
      {
        title: "Optimizing Goat Health",
        duration: 50,
        url: "https://example.com/videos/goat-health",
      },
      {
        title: "Goat Milk Production",
        duration: 30,
        url: "https://example.com/videos/goat-milk",
      },
    ],
    author: {
      name: "Paul Green",
      bio: "Specialist in goat farming and dairy production.",
      profilePicture: "https://example.com/images/paul-green.jpg",
    },
    thumbnail: "https://example.com/images/goat-course.jpg",
    reviews: [
      {
        userId: "6483bcf4e8a29b3c4d9a5679",
        comment: "Highly recommended for goat farmers.",
        rating: 4,
        createdAt: "2024-10-22T10:00:00Z",
      },
    ],
    totalEnrollments: 200,
  },
  {
    title: "Pig Farming Essentials",
    description: "All you need to know to start a pig farming business.",
    price: 300000,
    category: "Pig",
    level: "Beginner",
    videoContent: [
      {
        title: "Introduction to Pig Farming",
        duration: 15,
        url: "https://example.com/videos/pig-intro",
      },
      {
        title: "Feeding Pigs for Optimal Growth",
        duration: 20,
        url: "https://example.com/videos/pig-feeding",
      },
    ],
    author: {
      name: "Anna Brown",
      bio: "Expert in sustainable pig farming practices.",
      profilePicture: "https://example.com/images/anna-brown.jpg",
    },
    thumbnail: "https://example.com/images/pig-course.jpg",
    reviews: [],
    totalEnrollments: 100,
  },
  {
    title: "Comprehensive Poultry Farming",
    description: "A complete guide to poultry farming for all levels.",
    price: 600000,
    category: "Chicken",
    level: "Intermediate",
    videoContent: [
      {
        title: "Poultry Breeding Methods",
        duration: 30,
        url: "https://example.com/videos/poultry-breeding",
      },
      {
        title: "Managing Poultry Diseases",
        duration: 45,
        url: "https://example.com/videos/poultry-diseases",
      },
    ],
    author: {
      name: "Michael Johnson",
      bio: "Seasoned poultry farmer and lecturer.",
      profilePicture: "https://example.com/images/michael-johnson.jpg",
    },
    thumbnail: "https://example.com/images/poultry-course.jpg",
    reviews: [],
    totalEnrollments: 180,
  },
  {
    title: "Modern Farming Techniques for Ducks",
    description:
      "Innovative approaches to efficient and profitable duck farming.",
    price: 500000,
    category: "Duck",
    level: "Intermediate",
    videoContent: [
      {
        title: "Smart Duck Farming Tips",
        duration: 35,
        url: "https://example.com/videos/smart-duck-farming",
      },
      {
        title: "Eco-Friendly Duck Farming",
        duration: 40,
        url: "https://example.com/videos/eco-duck-farming",
      },
    ],
    author: {
      name: "Sophia Wilson",
      bio: "Renowned expert in eco-friendly farming techniques.",
      profilePicture: "https://example.com/images/sophia-wilson.jpg",
    },
    thumbnail: "https://example.com/images/duck-eco-course.jpg",
    reviews: [],
    totalEnrollments: 140,
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
