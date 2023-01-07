import { Text, View, StyleSheet, ViewProps } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

export type SectionTitleProps = ViewProps & {
  texts: string[],
};

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <View style={styles.titleLayout}>
      {
        props.texts.map((text, idx) => {
          return (
            <Text key={idx} style={styles.titleTextLayout}>{text}</Text>
          );
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  titleLayout: {
    marginTop: 8,
  },
  titleTextLayout: {
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    color: Color.black,
    fontFamily: FontFamily.inter,
    lineHeight: 44,
    alignItems: "center"
  },
});

export { SectionTitle };
