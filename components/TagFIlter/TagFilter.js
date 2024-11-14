import { ScrollView, Text, View } from "react-native";
import TagFilterItem from "./TagFilterItem";
import { GlobalStyles } from "../../constants/style";

const filters = ["Filter", "Promo", "Free Delivery", "Termurah", "Berkualitas"];

const TagFilter = ({ selectedFilter, onFilterChange }) => {
  const toggleSelection = (filter) => {
    onFilterChange((prevSelected) =>
      prevSelected.includes(filter)
        ? prevSelected.filter((item) => item !== filter)
        : [...prevSelected, filter]
    );
  };

  const backgroundColor = {
    selected: GlobalStyles.colors.primary,
    default: GlobalStyles.colors.background,
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginVertical: 4,
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
        }}
      >
        {filters.map((filter) => (
          <TagFilterItem
            key={filter}
            filter={filter}
            toggle={toggleSelection}
            selectedFilter={selectedFilter}
            backgroundColor={backgroundColor}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TagFilter;
