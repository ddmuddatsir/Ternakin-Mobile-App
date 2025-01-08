import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../../constants/style";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { fetchData } from "../../utils/fetchData";
import { ProductSubcribeLarge } from "../../components/Product/ProductSubcribe/ProductSubcribe";

const ListCourseScreen = ({ route }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      if (route.params?.data) {
        setCourses(route.params.data);
      } else {
        try {
          const courseData = await fetchData("/product-courses");
          setCourses(courseData);
        } catch (error) {
          console.error("Error fetching course data:", error);
        }
      }
      setLoading(false);
    };
    loadCourses();
  }, [route.params]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar searcBar={true} active={true} back />
      </SafeAreaView>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: GlobalStyles.colors.light,
          padding: 12,
        }}
      >
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <View key={`course-${index}`} style={{ marginBottom: 12 }}>
              <ProductSubcribeLarge productCourse={course} />
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Tidak ada data Course yang tersedia.
          </Text>
        )}
      </ScrollView>
    </>
  );
};

export default ListCourseScreen;

const styles = StyleSheet.create({});
