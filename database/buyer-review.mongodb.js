/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "register";
const collection = "buyer-review";

// The current database to use.
use(database);

// Create a new collection.
db.getCollection(collection).insertMany([
  {
    product: null, // To be updated with Product ID
    name: "Alice",
    rating: 5,
    reviewText:
      "Excellent quality! The cow is healthy and meets all expectations.",
    reviewDate: "2024-09-10",
    image:
      "https://images.pexels.com/photos/1486976/pexels-photo-1486976.jpeg?auto=compress&cs=tinysrgb&w=800",
    photoReview: [
      "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/51311/cow-calf-cattle-stock-51311.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/248167/pexels-photo-248167.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    product: null, // To be updated with Product ID
    name: "Bob",
    rating: 4,
    reviewText: "Good product but the delivery was slightly delayed.",
    reviewDate: "2024-09-12",
    image:
      "https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=800",
    photoReview: [],
  },
  {
    product: null, // To be updated with Product ID
    name: "Charlie",
    rating: 4,
    reviewText: "The goat is of great quality, but the price is a bit high.",
    reviewDate: "2024-09-15",
    image:
      "https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=800",
    photoReview: [
      "https://images.pexels.com/photos/86594/goat-animal-horns-black-and-white-86594.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1773181/pexels-photo-1773181.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    product: null, // To be updated with Product ID
    name: "Diana",
    rating: 5,
    reviewText: "Organic chicken was fresh and very tasty. Highly recommend!",
    reviewDate: "2024-09-18",
    image:
      "https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg?auto=compress&cs=tinysrgb&w=800",
    photoReview: [
      "https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5145/animal-easter-chick-chicken.jpg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    product: null, // To be updated with Product ID
    name: "Edward",
    rating: 3,
    reviewText: "The pork was good but not as tender as expected.",
    reviewDate: "2024-09-20",
    image:
      "https://images.pexels.com/photos/208821/pexels-photo-208821.jpeg?auto=compress&cs=tinysrgb&w=800",
    photoReview: [
      "https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/109641/pexels-photo-109641.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    product: null, // To be updated with Product ID
    name: "Fiona",
    rating: 5,
    reviewText: "Wooly sheep was perfect for our needs. Excellent purchase!",
    reviewDate: "2024-09-22",
    image:
      "https://images.pexels.com/photos/1276237/pexels-photo-1276237.jpeg?auto=compress&cs=tinysrgb&w=800",
    photoReview: [
      "https://images.pexels.com/photos/593898/pexels-photo-593898.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
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
