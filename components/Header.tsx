import { Image, StyleSheet, Text, View, ViewProps, Pressable, GestureResponderEvent } from "react-native";
import { Margin, FontFamily, FontSize, Color, globalStyles } from "../GlobalStyles";

export type HeaderProps = ViewProps & {
  handleContactUsPress?: (e: GestureResponderEvent) => void,
};

const Header = (props: HeaderProps) => {
  return (
    <View
      style={[globalStyles.row, globalStyles.center, props.style]}
    >
      <Image
        style={styles.logoLayout}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />

      <Pressable
        style={styles.contactUsLayout}
        onPress={props.handleContactUsPress}
      >
        <Text style={styles.contactUsTextLayout}>Contact us</Text>

        <Image
          style={styles.contactUsIconLayout}
          resizeMode="cover"
          source={require("../assets/contact.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logoLayout: {
    width: 74,
    height: 16,
    overflow: "hidden",
  },
  contactUsLayout: {
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: Color.black,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 179,
    flexDirection: "row",
  },
  contactUsTextLayout: {
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  contactUsIconLayout: {
    width: 8,
    height: 8,
    marginLeft: Margin.m_md,
  },
});

export { Header };
