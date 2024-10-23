/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "register";
const collection = "shippingMethod";

// The current database to use.
use(database);

// Create a new collection.
db.getCollection(collection).insertMany([
  {
    location: "Ciawi, Bogor",
    estimate: [
      {
        timeArrive: 3,
        periodArrive: "Hour",
      },
    ],
    cost: 50000,
    method: "Same day",
  },
  {
    location: "Sukabumi",
    estimate: [
      {
        timeArrive: 1,
        periodArrive: "Days",
      },
    ],
    cost: 75000,
    method: "Standard shipping",
  },
  {
    location: "Jakarta",
    estimate: [
      {
        timeArrive: 4,
        periodArrive: "Hour",
      },
    ],
    cost: 60000,
    method: "Express delivery",
  },
  {
    location: "Bandung",
    estimate: [
      {
        timeArrive: 2,
        periodArrive: "Days",
      },
    ],
    cost: 100000,
    method: "Premium shipping",
  },
  {
    location: "Surabaya",
    estimate: [
      {
        timeArrive: 3,
        periodArrive: "Days",
      },
    ],
    cost: 70000,
    method: "Standard shipping",
  },
  {
    location: "Malang",
    estimate: [
      {
        timeArrive: 5,
        periodArrive: "Days",
      },
    ],
    cost: 65000,
    method: "Standard shipping",
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
