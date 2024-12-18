import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/style";
import { searchAllData } from "../../utils/searchData";
import BackButton from "../../components/Button/BackButton";

const SearchProductScreen = () => {
  const searchInputRef = useRef(null);

  const navigation = useNavigation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchInputRef.current?.focus(); // Fokuskan setelah render selesai
    }, 100); // Tunggu sedikit agar layar benar-benar siap

    return () => clearTimeout(timeout); // Bersihkan timeout saat komponen unmount
  }, []);

  const handleSearch = async (text) => {
    setQuery(text);

    if (text.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const allData = await searchAllData();

      // Filter data untuk mencocokkan kategori atau judul
      const filteredResults = allData
        .filter((item) => {
          // Memeriksa kategori dan judul produk
          const category = item.category?.toLowerCase() || "";
          const title = item.title?.toLowerCase() || "";

          return (
            category.includes(text.toLowerCase()) || // Pencocokan kategori
            title.includes(text.toLowerCase()) // Pencocokan judul produk
          );
        })
        .reduce((acc, item) => {
          // Menambahkan hasil unik berdasarkan kategori atau judul
          const keyword = item.category || item.title;
          if (!acc.some((entry) => entry.keyword === keyword)) {
            acc.push({
              keyword: keyword, // Menambahkan kata kunci dari kategori atau judul
              type: item.category ? "category" : "title", // Menandakan tipe hasil pencarian
            });
          }
          return acc;
        }, []);

      setResults(filteredResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <View
        style={{
          paddingRight: 50,
          paddingLeft: 10,
          paddingTop: 62,
          paddingBottom: 12,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BackButton />

        <View
          style={{
            flex: 1,
            backgroundColor: GlobalStyles.colors.light,
            flexDirection: "row",
            borderRadius: 12,
            height: 42,
            alignItems: "center",
            paddingHorizontal: 4,
            borderWidth: 1,
            borderColor: GlobalStyles.colors.gray100,
          }}
        >
          <TextInput
            ref={searchInputRef}
            placeholder="Type to search..."
            onChangeText={handleSearch}
            value={query}
            style={{
              flex: 1,
              fontSize: 16,
              marginHorizontal: 7,
            }}
          />
        </View>
      </View>
      <ScrollView style={{ backgroundColor: GlobalStyles.colors.light }}>
        {results.length > 0 ? (
          results.map((result, index) => (
            <Pressable
              key={index}
              onPress={
                () =>
                  result.type === "category"
                    ? navigation.navigate("ResultSearch", {
                        category: result.keyword,
                      })
                    : console.log("Title selected:", result.keyword) // Jika hasilnya adalah title
              }
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#ddd",
              }}
            >
              <Text style={{ fontSize: 16 }}>{result.keyword}</Text>
            </Pressable>
          ))
        ) : (
          <Text
            style={{
              fontSize: 16,
              color: GlobalStyles.colors.gray100,
              alignSelf: "center",
              padding: 50,
            }}
          >
            No results found
          </Text>
        )}
      </ScrollView>
    </>
  );
};

export default SearchProductScreen;
