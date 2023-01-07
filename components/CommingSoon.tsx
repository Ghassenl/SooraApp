import { Text, View, StyleSheet } from "react-native";
import { globalStyles, Color, FontFamily, FontSize } from "../GlobalStyles";

const CommingSoon = () => {
  return (
    <View style={[globalStyles.row, globalStyles.center]}>
      <View style={styles.horizLine} />
      <Text style={styles.comingSoon}>
        Coming Soon
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  horizLine: {
    borderTopWidth: 1.3,
    marginRight: 6,
    width: 17.7,
    height: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  comingSoon: {
    color: Color.black,
    fontFamily: FontFamily.inter,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    lineHeight: 15,
  },
});

export { CommingSoon };
