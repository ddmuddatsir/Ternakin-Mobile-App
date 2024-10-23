const products = [
  {
    id: "1",
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
      "Rapid Growth: Potential for high weight gain in a short periodArrive.",
      "Ease of Maintenance: Suitable for large or small-scale operations, with maintenance guidelines provided.",
    ],
    shippingMethod: {
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
    farm: {
      id: 1,
      name: "UG Farm",
      location: "Cigombong, Kab. Bogor",
      rating: 5.0,
      followers: "42K",
      workingHours: "08.00 - 20.00",
      image: "https://picsum.photos/200/300",
    },
    buyerReviews: [
      {
        name: "Japfa Farm",
        rating: 5,
        reviewText: "Great quality cows. Very satisfied with the purchase.",
        reviewDate: "2024-08-20",
        image: `https://picsum.photos/id/7/367/267`,
        photoReview: [
          "https://images.unsplash.com/photo-1530268782463-418534b0affa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1464472186810-92f1e85ac789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1484729191033-ab703f3eac3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
        ],
      },
    ],
  },

  {
    id: "2",
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
      "Excellent Genetics: Comes from a line of high-performance dairy goats.",
      "Health Assurance: Regular health checks and vaccinations.",
      "Adaptable: Suitable for various climates and conditions.",
      "Low Maintenance: Easy to care for with minimal requirements.",
    ],
    shippingMethod: {
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
    farm: {
      id: 2,

      name: "Green Pasture Farm",
      location: "Puncak, Kab. Bogor",
      rating: 4.8,
      followers: "35K",
      workingHours: "09.00 - 17.00",
      image: "https://example.com/green-pasture.jpg",
    },
    buyerReviews: [
      {
        name: "DairyCo",
        rating: 4,
        reviewText:
          "Excellent goats for dairy production. Will purchase again.",
        reviewDate: "2024-08-21",
        image: "https://example.com/dairy-review.jpg",
        photoReview: [
          "https://plus.unsplash.com/premium_photo-1664304299664-a8e2e2f80290?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D",
          "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D",
        ],
      },
    ],
  },

  {
    id: "3",
    title: "Organic Chicken",
    price: 200000,
    discPer: 8,
    rate: 4.6,
    sold: 200,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Male_and_female_chicken_sitting_together.jpg",
    stock: 100,
    condition: "Sent to Jakarta",
    minOrder: 1,
    shedPen: "Chicken",
    advantages: [
      "Organic Feed: Fed with 100% organic feed for healthier meat.",
      "Disease-Free: Regular health checks to ensure quality.",
      "Sustainable Farming: Raised using eco-friendly farming practices.",
      "Quick Growth: Efficient growth rate ensuring a good yield.",
      "High-Quality Meat: Tender and flavorful meat.",
    ],
    shippingMethod: {
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
    farm: {
      id: 3,

      name: "Eco Poultry Farm",
      location: "Depok",
      rating: 4.9,
      followers: "50K",
      workingHours: "07.00 - 18.00",
      image: "https://example.com/eco-poultry.jpg",
    },
    buyerReviews: [
      {
        name: "Fresh Foods Ltd.",
        rating: 5,
        reviewText: "Best quality chicken we've had. Highly recommended!",
        reviewDate: "2024-08-22",
        image: "https://example.com/chicken-review.jpg",
        photoReview: [
          "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1534292095819-f289d7b36317?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
        ],
      },
    ],
  },

  {
    id: "4",
    title: "Elite Breeding Bull",
    price: 1200000,
    discPer: 12,
    rate: 4.8,
    sold: 80,
    image:
      "https://www.shutterstock.com/image-vector/illustration-aggressive-fighting-bull-600nw-2464122009.jpg",
    stock: 30,
    condition: "Sent to Bandung",
    minOrder: 1,
    shedPen: "Bull",
    advantages: [
      "Superior Genetics: Selected for high-quality breeding potential.",
      "Proven Performance: Demonstrated excellence in progeny production.",
      "Health Guaranteed: Comprehensive health screening and vaccinations.",
      "Robust Growth: Strong and healthy, ideal for breeding purposes.",
      "Support Provided: Includes guidance on breeding practices.",
    ],
    shippingMethod: {
      location: "Bandung",
      estimate: [
        {
          timeArrive: 3,
          periodArrive: "Days",
        },
      ],
      cost: 80000,
      method: "Standard shipping",
    },
    farm: {
      id: 4,

      name: "Premium Breeders Farm",
      location: "Garut",
      rating: 4.7,
      followers: "28K",
      workingHours: "08.00 - 19.00",
      image: "https://example.com/breeders-farm.jpg",
    },
    buyerReviews: [
      {
        name: "Farmers Hub",
        rating: 4,
        reviewText: "High-quality breeding bull with excellent genetic traits.",
        reviewDate: "2024-08-23",
        image: "https://example.com/bull-review.jpg",
      },
    ],
  },
  {
    id: "5",
    title: "Healthy Pigs",
    price: 600000,
    discPer: 7,
    rate: 4.4,
    sold: 180,
    image:
      "https://cyfairanimalhospital.com/wp-content/uploads/2018/11/blog_pig2-1024x571.jpg",
    stock: 60,
    condition: "Sent to Surabaya",
    minOrder: 1,
    shedPen: "Pig",
    advantages: [
      "Disease-Free: Regular health checks and vaccinations.",
      "High Growth Rate: Fast-growing with excellent feed conversion.",
      "Adaptable: Thrives in various environments and conditions.",
      "Good Meat Quality: Tender and flavorful pork.",
      "Low Maintenance: Requires minimal care with proper guidelines.",
    ],
    shippingMethod: {
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
    farm: {
      id: 5,

      name: "Pork Paradise Farm",
      location: "Mojokerto",
      rating: 4.6,
      followers: "40K",
      workingHours: "08.00 - 17.00",
      image: "https://example.com/pork-paradise.jpg",
    },
    buyerReviews: [
      {
        name: "Meat Lovers Inc.",
        rating: 5,
        reviewText: "Exceptional quality pigs. Will definitely buy again.",
        reviewDate: "2024-08-24",
        image: "https://example.com/pigs-review.jpg",
        photoReview: [],
      },
    ],
  },
  {
    id: "6",
    title: "High-Performance Sheep",
    price: 500000,
    discPer: 6,
    rate: 4.3,
    sold: 160,
    image:
      "https://modernfarmer.com/wp-content/uploads/2017/12/Funny-Sheep-Facts-1200x800.jpg",
    stock: 55,
    condition: "Sent to Malang",
    minOrder: 1,
    shedPen: "Sheep",
    advantages: [
      "Excellent Wool Quality: Provides high-quality wool suitable for various products.",
      "Disease Resistant: Strong immune system with regular health check-ups.",
      "Efficient Feed Conversion: Converts feed into body weight effectively.",
      "Adaptable: Suited for various environments and climates.",
      "Easy Management: Minimal care requirements with provided guidelines.",
    ],
    shippingMethod: {
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
    farm: {
      id: 7,
      name: "Wooly Farm",
      location: "Jember",
      rating: 4.5,
      followers: "33K",
      workingHours: "09.00 - 18.00",
      image: "https://example.com/wooly-farm.jpg",
    },
    buyerReviews: [
      {
        name: "Sheep Ranchers Co.",
        rating: 4,
        reviewText:
          "Very satisfied with the wool quality and overall health of the sheep.",
        reviewDate: "2024-08-25",
        image: "https://example.com/sheep-review.jpg",
        photoReview: [],
      },
    ],
  },
  {
    id: "7",
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
      "Rapid Growth: Potential for high weight gain in a short periodArrive.",
      "Ease of Maintenance: Suitable for large or small-scale operations, with maintenance guidelines provided.",
    ],
    shippingMethod: {
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
    farm: {
      id: 1,

      name: "UG Farm",
      location: "Cigombong, Kab. Bogor",
      rating: 5.0,
      followers: "42K",
      workingHours: "08.00 - 20.00",
      image: "https://picsum.photos/200/300",
    },
    buyerReviews: [
      {
        name: "Japfa Farm",
        rating: 5,
        reviewText: "Great quality cows. Very satisfied with the purchase.",
        reviewDate: "2024-08-20",
        image: `https://picsum.photos/id/7/367/267`,
        photoReview: [
          "https://images.unsplash.com/photo-1530268782463-418534b0affa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1464472186810-92f1e85ac789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1484729191033-ab703f3eac3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
        ],
      },
    ],
  },
];