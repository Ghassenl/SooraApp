import { View, StyleSheet, ViewProps } from "react-native";
import { globalStyles } from "../GlobalStyles";

import { CommingSoon } from "./CommingSoon";
import { SectionTitle, } from "./SectionTitle";
import { SectionImages } from "./SectionImages";
import { ButtonInput } from "./ButtonInput";

export type SecondSectionProps = ViewProps & {};

const SecondSection = (props: SecondSectionProps) => {
  return (
    <View style={props.style}>
      <CommingSoon />

      <SectionTitle
        texts={[
          "Get Notified",
          "When we Launch"
        ]}
      />

      <View style={[globalStyles.center, styles.inputLayout]}>
        <ButtonInput />
      </View >

      <SectionImages
        style={[globalStyles.center, styles.imagesLayout]}
        images={[
          require("../assets/landing-2-2.png"),
          require("../assets/landing-2-1.png"),
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionLayout: {
    marginTop: 60,
  },
  inputLayout: {
    marginTop: 16.75,
  },
  imagesLayout: {
    marginTop: 30,
  }
});

export { SecondSection };
