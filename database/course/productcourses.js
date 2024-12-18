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
      "Learn the essential skills and strategies for successful cattle farming. This course provides detailed insights into feeding, breeding, and disease management for cattle to ensure a thriving business.",
    price: 500000,
    cc: "IDR",
    category: "Cow",
    level: "Beginner",
    language: "English",
    rating: 4.8,
    lastUpdated: "2024-11-20",
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
      {
        title: "Cattle Health and Vaccination",
        duration: 25,
        url: "https://example.com/videos/cattle-health",
      },
      {
        title: "Cattle Breeding 101",
        duration: 40,
        url: "https://example.com/videos/cattle-breeding",
      },
    ],
    whatYouWillLearn: [
      "Proper feeding and nutrition for cattle.",
      "Effective breeding strategies.",
      "Techniques for disease prevention and management.",
    ],
    requirements: [
      "Basic understanding of animal care.",
      "Passion for farming.",
    ],
    author: {
      name: "John Doe",
      bio: "Expert in cattle farming with over 20 years of experience.",
      profilePicture: "https://example.com/images/john-doe.jpg",
    },
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661962510497-9505129083fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviews: [],
    totalEnrollments: 120,
  },
  {
    title: "Chicken Farming for Beginners",
    description:
      "Step-by-step guide to raising chickens for meat and eggs. This course covers everything from coop setup to disease prevention and egg collection.",
    price: 350000,
    cc: "IDR",
    category: "Chicken",
    level: "Beginner",
    language: "Indonesian",
    rating: 4.9,
    lastUpdated: "2024-11-15",
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
      {
        title: "Egg Collection and Storage",
        duration: 20,
        url: "https://example.com/videos/chicken-eggs",
      },
      {
        title: "Disease Management for Chickens",
        duration: 35,
        url: "https://example.com/videos/chicken-diseases",
      },
    ],
    whatYouWillLearn: [
      "Designing and maintaining a chicken coop.",
      "Feeding techniques for optimal meat and egg production.",
      "Preventing and managing common poultry diseases.",
    ],
    requirements: [
      "Access to basic farming tools.",
      "Interest in poultry farming.",
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
    description:
      "Learn advanced techniques to optimize duck farming. Focus on breeding, feeding, and modern farming methods for better yields.",
    price: 450000,
    cc: "IDR",
    category: "Duck",
    level: "Advanced",
    language: "English",
    rating: 4.7,
    lastUpdated: "2024-11-10",
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
      {
        title: "Modern Feeding Strategies",
        duration: 25,
        url: "https://example.com/videos/duck-feeding",
      },
      {
        title: "Sustainable Duck Farming",
        duration: 30,
        url: "https://example.com/videos/duck-sustainable",
      },
    ],
    whatYouWillLearn: [
      "Mastering advanced duck breeding techniques.",
      "Efficient disease control strategies.",
      "Sustainable practices for duck farming.",
    ],
    requirements: [
      "Basic knowledge of duck farming.",
      "Experience with small-scale farming.",
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
    title: "Mastering Cattle Farming",
    description:
      "Pelajari keterampilan penting dan strategi untuk sukses dalam beternak sapi, mulai dari manajemen pakan, kesehatan sapi, hingga pengelolaan ternak.",
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
      {
        title: "Health and Disease Management",
        duration: 25,
        url: "https://example.com/videos/cattle-health",
      },
    ],
    language: "English",
    lastUpdated: "2024-11-01",
    countryCode: "ID",
    author: {
      name: "John Doe",
      bio: "Ahli peternakan sapi dengan pengalaman lebih dari 20 tahun.",
      profilePicture: "https://example.com/images/john-doe.jpg",
    },
    thumbnail: "https://example.com/images/cattle-course.jpg",
    totalEnrollments: 120,
    rating: 4.8,
    requirements: [
      "Tidak memerlukan pengalaman sebelumnya.",
      "Akses internet untuk menonton video.",
    ],
    youWillLearn: [
      "Dasar-dasar beternak sapi.",
      "Strategi pemberian makan yang optimal.",
      "Manajemen kesehatan ternak sapi.",
    ],
  },
  {
    title: "Chicken Farming for Beginners",
    description:
      "Panduan langkah demi langkah untuk membesarkan ayam pedaging dan petelur dengan teknik praktis dan efisien.",
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
      {
        title: "Raising Healthy Chickens",
        duration: 20,
        url: "https://example.com/videos/healthy-chickens",
      },
    ],
    language: "Indonesian",
    lastUpdated: "2024-10-15",
    countryCode: "ID",
    author: {
      name: "Jane Smith",
      bio: "Peternak unggas profesional dan pelatih berpengalaman.",
      profilePicture: "https://example.com/images/jane-smith.jpg",
    },
    thumbnail: "https://example.com/images/chicken-course.jpg",
    totalEnrollments: 300,
    rating: 4.9,
    requirements: [
      "Ruang atau lahan untuk peternakan ayam.",
      "Kesiapan untuk mempelajari manajemen unggas.",
    ],
    youWillLearn: [
      "Desain kandang ayam yang efektif.",
      "Teknik merawat ayam untuk produksi optimal.",
      "Cara mengelola kesehatan unggas.",
    ],
  },
  {
    title: "Duck Farming Masterclass",
    description:
      "Teknik lanjutan untuk meningkatkan efisiensi dan profitabilitas dalam beternak bebek.",
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
      {
        title: "Eco-Friendly Duck Farming",
        duration: 30,
        url: "https://example.com/videos/eco-duck",
      },
    ],
    language: "Indonesian",
    lastUpdated: "2024-09-25",
    countryCode: "MY",
    author: {
      name: "David Lee",
      bio: "Dokter hewan spesialis bebek.",
      profilePicture: "https://example.com/images/david-lee.jpg",
    },
    thumbnail: "https://example.com/images/duck-course.jpg",
    totalEnrollments: 150,
    rating: 4.7,
    requirements: [
      "Pengalaman dasar dalam beternak unggas.",
      "Pemahaman dasar tentang pengelolaan lahan.",
    ],
    youWillLearn: [
      "Teknik pembiakan bebek yang sukses.",
      "Manajemen penyakit bebek.",
      "Strategi beternak ramah lingkungan.",
    ],
  },
  {
    title: "Sheep Farming Fundamentals",
    description:
      "Panduan komprehensif tentang cara merawat dan membesarkan domba untuk pemula hingga peternak menengah.",
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
      {
        title: "Sheep Disease Prevention",
        duration: 30,
        url: "https://example.com/videos/sheep-disease",
      },
    ],
    language: "English",
    lastUpdated: "2024-09-30",
    countryCode: "AU",
    author: {
      name: "Emily White",
      bio: "Konsultan peternakan domba dengan pengalaman luas.",
      profilePicture: "https://example.com/images/emily-white.jpg",
    },
    thumbnail: "https://example.com/images/sheep-course.jpg",
    totalEnrollments: 150,
    rating: 4.6,
    requirements: [
      "Akses ke lahan untuk peternakan domba.",
      "Pemahaman dasar tentang manajemen hewan.",
    ],
    youWillLearn: [
      "Dasar-dasar pemeliharaan domba.",
      "Cara memanen wol secara efisien.",
      "Pencegahan penyakit pada domba.",
    ],
  },
  {
    title: "Sustainable Goat Farming",
    description:
      "Pelajari cara beternak kambing secara berkelanjutan dengan fokus pada kesehatan ternak dan hasil produksi.",
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
      {
        title: "Sustainable Feed Strategies",
        duration: 35,
        url: "https://example.com/videos/goat-feed",
      },
    ],
    language: "English",
    lastUpdated: "2024-11-20",
    countryCode: "US",
    author: {
      name: "Paul Green",
      bio: "Spesialis peternakan kambing dan produksi susu.",
      profilePicture: "https://example.com/images/paul-green.jpg",
    },
    thumbnail: "https://example.com/images/goat-course.jpg",
    totalEnrollments: 250,
    rating: 4.9,
    requirements: [
      "Pengalaman dasar dalam peternakan kambing.",
      "Akses ke sumber pakan ternak.",
    ],
    youWillLearn: [
      "Strategi pemberian makan berkelanjutan.",
      "Teknik produksi susu kambing.",
      "Cara meningkatkan kesehatan kambing.",
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
