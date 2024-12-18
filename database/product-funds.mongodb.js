/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "register";
const collection = "productfunds";

// The current database to use.
use(database);

// Create a new collection.

db.getCollection(collection).insertMany([
  {
    title: "Pendanaan Pertanian Organik",
    farmId: "66e96a45ad43897e71774d33",
    description:
      "Pendanaan untuk pengembangan kebun organik di daerah pegunungan.",
    sector: "Pertanian",
    fundingGoal: 10000000,
    fundedAmount: 0,
    profitSharing: 30,
    duration: 12,
    weeklyInstallment: 250000,
    monthlyIncome: 1000000,
    riskLevel: "Low",
    akad: "Early funding",
    status: "Open",
    backers: [],
    reports: [],
  },
  {
    title: "Proyek Ternak Kambing",
    farmId: "66e96a45ad43897e71774d34",
    description:
      "Pendanaan untuk pembelian kambing etawa untuk meningkatkan produksi susu kambing.",
    sector: "Peternakan",
    fundingGoal: 5000000,
    fundedAmount: 5000000,
    profitSharing: 25,
    duration: 6,
    weeklyInstallment: 200000,
    monthlyIncome: 800000,
    riskLevel: "Medium",
    akad: "Ongoing funding",
    status: "Funded",
    startDate: "2024-01-01",
    endDate: "2024-07-01",
    backers: [
      {
        userId: "64f8ab3c2e9c4f12a5b1d236",
        amount: 2500000,
        date: "2023-12-01",
      },
      {
        userId: "64f8ab3c2e9c4f12a5b1d237",
        amount: 2500000,
        date: "2023-12-02",
      },
    ],
    reports: [],
  },
  {
    title: "Proyek Budidaya Ikan Lele",
    farmId: "66e96a45ad43897e71774d35",
    description:
      "Budidaya ikan lele menggunakan teknologi bioflok untuk meningkatkan hasil panen.",
    sector: "Perikanan",
    fundingGoal: 8000000,
    fundedAmount: 8000000,
    profitSharing: 35,
    duration: 10,
    weeklyInstallment: 300000,
    monthlyIncome: 1200000,
    riskLevel: "High",
    akad: "Ongoing funding",
    status: "In Progress",
    startDate: "2024-03-01",
    endDate: "2024-12-31",
    backers: [
      {
        userId: "64f8ab3c2e9c4f12a5b1d239",
        amount: 4000000,
        date: "2024-02-01",
      },
      {
        userId: "64f8ab3c2e9c4f12a5b1d240",
        amount: 4000000,
        date: "2024-02-02",
      },
    ],
    reports: [
      {
        reportDate: "2024-04-01",
        progress: "Kolam telah disiapkan dan benih ikan telah ditebar.",
        images: [
          {
            url: "https://example.com/image1.jpg",
            description: "Kolam bioflok baru selesai.",
          },
          {
            url: "https://example.com/image2.jpg",
            description: "Benih ikan lele yang baru tiba.",
          },
        ],
      },
      {
        reportDate: "2024-05-01",
        progress: "Ikan lele telah tumbuh hingga ukuran 5 cm.",
        images: [
          {
            url: "https://example.com/image3.jpg",
            description: "Ikan lele dalam tahap pertumbuhan.",
          },
        ],
      },
    ],
  },
  {
    title: "Proyek Hortikultura Sayuran",
    farmId: "66e96a45ad43897e71774d36",
    description:
      "Pengembangan kebun sayuran hidroponik untuk memenuhi kebutuhan pasar lokal.",
    sector: "Pertanian",
    fundingGoal: 7000000,
    fundedAmount: 7000000,
    profitSharing: 20,
    duration: 8,
    weeklyInstallment: 175000,
    monthlyIncome: 700000,
    riskLevel: "Low",
    akad: "Early funding",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-09-01",
    backers: [
      {
        userId: "64f8ab3c2e9c4f12a5b1d242",
        amount: 3500000,
        date: "2022-12-01",
      },
      {
        userId: "64f8ab3c2e9c4f12a5b1d243",
        amount: 3500000,
        date: "2022-12-05",
      },
    ],
    reports: [
      {
        reportDate: "2023-03-01",
        progress: "Sayuran pertama telah dipanen dengan hasil yang baik.",
        images: [
          {
            url: "https://example.com/image4.jpg",
            description: "Panen perdana sayuran hidroponik.",
          },
        ],
      },
      {
        reportDate: "2023-07-01",
        progress:
          "Hasil panen telah dijual ke pasar lokal, keuntungan sesuai target.",
        images: [],
      },
    ],
  },
  {
    title: "Proyek Budidaya Udang Vaname",
    farmId: "66e96a45ad43897e71774d37",
    description: "Pendanaan untuk tambak udang vaname dengan teknologi modern.",
    sector: "Perikanan",
    fundingGoal: 15000000,
    fundedAmount: 0,
    profitSharing: 40,
    duration: 18,
    weeklyInstallment: 500000,
    monthlyIncome: 2000000,
    riskLevel: "High",
    akad: "Early funding",
    status: "Cancelled",
    backers: [],
    reports: [],
  },
  {
    title: "Proyek Kebun Jeruk Lokal",
    farmId: "66e96a45ad43897e71774d38",
    description: "Pendanaan untuk pengembangan kebun jeruk untuk ekspor.",
    sector: "Pertanian",
    fundingGoal: 12000000,
    fundedAmount: 12000000,
    profitSharing: 15,
    duration: 24,
    weeklyInstallment: 250000,
    monthlyIncome: 1000000,
    riskLevel: "Medium",
    akad: "Ongoing funding",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "2026-01-15",
    backers: [
      {
        userId: "64f8ab3c2e9c4f12a5b1d246",
        amount: 6000000,
        date: "2023-12-10",
      },
      {
        userId: "64f8ab3c2e9c4f12a5b1d247",
        amount: 4000000,
        date: "2023-12-12",
      },
      {
        userId: "64f8ab3c2e9c4f12a5b1d248",
        amount: 2000000,
        date: "2023-12-15",
      },
    ],
    reports: [
      {
        reportDate: "2024-03-01",
        progress: "Pohon jeruk telah ditanam, sedang dalam masa pertumbuhan.",
        images: [
          {
            url: "https://example.com/image5.jpg",
            description: "Penanaman pohon jeruk baru.",
          },
        ],
      },
      {
        reportDate: "2024-06-01",
        progress: "Pertumbuhan pohon jeruk sehat dan sesuai jadwal.",
        images: [],
      },
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
