/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const collection = "salesreportfarm";

// The current database to use.
use("register");

// Search for documents in the current collection.
db.getCollection(collection).insertMany([
  {
    farmId: "66e96a45ad43897e71774d33",
    year: 2024,
    totalSales: {
      Januari: 5000000,
      Februari: 6000000,
      Maret: 5500000,
      April: 6000000,
      Mei: 6200000,
      Juni: 7000000,
      Juli: 7500000,
      Agustus: 8000000,
      September: 8500000,
      Oktober: 9000000,
      November: 9500000,
      Desember: 10000000,
    },
  },
  {
    farmId: "66e96a45ad43897e71774d34",
    year: 2024,
    totalSales: {
      Januari: 1000000,
      Februari: 1200000,
      Maret: 1100000,
      April: 1300000,
      Mei: 1250000,
      Juni: 1400000,
      Juli: 1450000,
      Agustus: 1500000,
      September: 1550000,
      Oktober: 1600000,
      November: 1700000,
      Desember: 1750000,
    },
  },
  {
    farmId: "66e96a45ad43897e71774d35",
    year: 2024,
    totalSales: {
      Januari: 2000000,
      Februari: 2500000,
      Maret: 2400000,
      April: 2300000,
      Mei: 2600000,
      Juni: 2700000,
      Juli: 2800000,
      Agustus: 2900000,
      September: 3000000,
      Oktober: 3100000,
      November: 3200000,
      Desember: 3300000,
    },
  },
  {
    farmId: "66e96a45ad43897e71774d36",
    year: 2024,
    totalSales: {
      Januari: 1500000,
      Februari: 1700000,
      Maret: 1600000,
      April: 1750000,
      Mei: 1800000,
      Juni: 1900000,
      Juli: 2000000,
      Agustus: 2100000,
      September: 2200000,
      Oktober: 2300000,
      November: 2400000,
      Desember: 2500000,
    },
  },
  {
    farmId: "66e96a45ad43897e71774d37",
    year: 2024,
    totalSales: {
      Januari: 3000000,
      Februari: 3500000,
      Maret: 3400000,
      April: 3300000,
      Mei: 3600000,
      Juni: 3700000,
      Juli: 3800000,
      Agustus: 3900000,
      September: 4000000,
      Oktober: 4100000,
      November: 4200000,
      Desember: 4300000,
    },
  },
  {
    farmId: "66e96a45ad43897e71774d38",

    year: 2024,
    totalSales: {
      Januari: 4000000,
      Februari: 4500000,
      Maret: 4600000,
      April: 4700000,
      Mei: 4800000,
      Juni: 5000000,
      Juli: 5100000,
      Agustus: 5200000,
      September: 5300000,
      Oktober: 5400000,
      November: 5500000,
      Desember: 5600000,
    },
  },
]);
