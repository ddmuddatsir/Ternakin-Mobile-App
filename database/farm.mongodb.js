/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "register";
const collection = "farm";

// The current database to use.
use(database);

// Create a new collection.
db.getCollection(collection).insertMany([
  {
    name: "UG Farm",
    location: "Cigombong, Kab. Bogor",
    rating: 5.0,
    followers: "42K",
    workingHours: "08.00 - 20.00",
    image: "https://picsum.photos/200/300",
    products: [],
  },
  {
    name: "Green Pasture Farm",
    location: "Puncak, Kab. Bogor",
    rating: 4.8,
    followers: "35K",
    workingHours: "09.00 - 17.00",
    image:
      "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=800",
    products: [],
  },
  {
    name: "Eco Poultry Farm",
    location: "Depok",
    rating: 4.9,
    followers: "50K",
    workingHours: "07.00 - 18.00",
    image:
      "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=800",
    products: [],
  },
  {
    name: "Prime Bull Farm",
    location: "Lembang, Bandung",
    rating: 4.9,
    followers: "60K",
    workingHours: "06.00 - 19.00",
    image:
      "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800",
    products: [],
  },
  {
    name: "Pork Paradise Farm",
    location: "Mojokerto",
    rating: 4.6,
    followers: "40K",
    workingHours: "08.00 - 17.00",
    image:
      "https://images.pexels.com/photos/840111/pexels-photo-840111.jpeg?auto=compress&cs=tinysrgb&w=800",
    products: [],
  },
  {
    name: "Wooly Farm",
    location: "Jember",
    rating: 4.5,
    followers: "33K",
    workingHours: "09.00 - 18.00",
    image:
      "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=800",
    products: [],
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
