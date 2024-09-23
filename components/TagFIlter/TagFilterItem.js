import { Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

const TagFilterItem = ({ filter, toggle, selectedFilter, backgroundColor }) => {
  const isSelected = selectedFilter.includes(filter);

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        margin: 4,
        backgroundColor: isSelected
          ? backgroundColor.selected
          : backgroundColor.default,
        borderRadius: 8,
      }}
      onPress={() => toggle(filter)}
    >
      <Text
        style={{
          fontSize: 12,
          color: isSelected
            ? GlobalStyles.colors.light
            : GlobalStyles.colors.text700,
        }}
      >
        {filter}
      </Text>
    </TouchableOpacity>
  );
};

export default TagFilterItem;
