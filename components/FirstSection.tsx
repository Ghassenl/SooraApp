import { Image, View, StyleSheet, ViewProps } from "react-native";
import { globalStyles } from "../GlobalStyles";

import { CommingSoon } from "./CommingSoon";
import { SectionTitle, } from "./SectionTitle";
import { SectionImages } from "./SectionImages";

export type FirstSectionProps = ViewProps & {};

const FirstSection = (props: FirstSectionProps) => {
  return (
    <View style={props.style}>
      <CommingSoon />

      <SectionTitle
        texts={[
          "Bringing",
          "Muslims together"
        ]}
      />

      <View style={[
        globalStyles.row,
        globalStyles.center,
        styles.storesLayout,
      ]}>
        <Image
          resizeMode="cover"
          source={require("../assets/google-play.png")}
        />
        <Image
          style={styles.storesItemLayout}
          resizeMode="cover"
          source={require("../assets/apple-store.png")}
        />
      </View>

      <SectionImages
        style={[globalStyles.center, styles.imagesLayout]}
        images={[
          require("../assets/landing-1-2.png"),
          require("../assets/landing-1-1.png"),
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionLayout: {
    marginTop: 60,
  },
  storesLayout: {
    marginTop: 24,
  },
  storesItemLayout: {
    marginLeft: 16,
  },
  imagesLayout: {
    marginTop: 30,
  }
});

export { FirstSection };
