import { fetchData } from "./fetchData";

// Utility untuk memeriksa dan mengembalikan string lowercase atau string kosong
const safeToLowerCase = (str) =>
  typeof str === "string" ? str.toLowerCase() : "";

// Search hanya untuk Product Data
export const searchProductData = async (query) => {
  try {
    const productData = await fetchData("/products");

    // Filter data berdasarkan keyword (category atau title)
    const filteredProducts = productData.filter(
      (item) =>
        safeToLowerCase(item.category).includes(query.toLowerCase()) ||
        safeToLowerCase(item.title).includes(query.toLowerCase())
    );

    return filteredProducts.map((item) => ({ ...item, type: "product" }));
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};

// Search hanya untuk Fund Data
export const searchFundData = async (query) => {
  try {
    const fundData = await fetchData("/product-funds");

    // Filter data berdasarkan keyword (category atau title)
    const filteredFunds = fundData.filter(
      (item) =>
        safeToLowerCase(item.category).includes(query.toLowerCase()) ||
        safeToLowerCase(item.title).includes(query.toLowerCase())
    );

    return filteredFunds.map((item) => ({ ...item, type: "fund" }));
  } catch (error) {
    console.error("Error fetching fund data:", error);
    return [];
  }
};

// Search hanya untuk Course Data
export const searchCourseData = async (query) => {
  try {
    const courseData = await fetchData("/product-courses");

    // Filter data berdasarkan keyword (category atau title)
    const filteredCourses = courseData.filter(
      (item) =>
        safeToLowerCase(item.category).includes(query.toLowerCase()) ||
        safeToLowerCase(item.title).includes(query.toLowerCase())
    );

    return filteredCourses.map((item) => ({ ...item, type: "course" }));
  } catch (error) {
    console.error("Error fetching course data:", error);
    return [];
  }
};

// Search untuk semua data (Product, Fund, dan Course)
export const searchAllData = async () => {
  try {
    const productData = await fetchData("/products");
    const fundData = await fetchData("/product-funds");
    const courseData = await fetchData("/product-courses");

    // Gabungkan semua data
    const allData = [
      ...productData.map((item) => ({
        ...item,
        category: item.category,
        title: item.title,
        type: "product",
      })),
      ...fundData.map((item) => ({
        ...item,
        category: item.category,
        title: item.title,
        type: "fund",
      })),
      ...courseData.map((item) => ({
        ...item,
        category: item.category,
        title: item.title,
        type: "course",
      })),
    ];

    return allData;
  } catch (error) {
    console.error("Error fetching all data:", error);
    return [];
  }
};
