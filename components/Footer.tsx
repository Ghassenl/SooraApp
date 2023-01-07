import * as React from "react";
import { Image, Text, View, ViewProps, StyleSheet } from "react-native";
import { globalStyles, Border, FontSize } from "../GlobalStyles";

export type FooterProps = ViewProps & {};

const Footer = (props: FooterProps) => {
  return (
    <View
      style={[
        props.style,
        globalStyles.column,
        globalStyles.center,
      ]}
    >
      <View
        style={[
          globalStyles.row,
          styles.socialsLayout
        ]}
      >
        <View style={[styles.socialItemLayout]}>
          <Image
            style={[styles.socialItemIconLayout]}
            resizeMode="cover"
            source={require("../assets/facebook.png")}
          />
        </View>

        <View style={[styles.socialItemLayout]}>
          <Image
            style={[styles.socialItemIconLayout]}
            resizeMode="cover"
            source={require("../assets/twitter.png")}
          />
        </View>

        <View style={[styles.socialItemLayout]}>
          <Image
            style={[styles.socialItemIconLayout]}
            resizeMode="cover"
            source={require("../assets/instagram.png")}
          />
        </View>

        <View style={[styles.socialItemLayout]}>
          <Image
            style={[styles.socialItemIconLayout]}
            resizeMode="cover"
            source={require("../assets/tiktok.png")}
          />
        </View>

        <View style={[styles.socialItemLayout]}>
          <Image
            style={[styles.socialItemIconLayout]}
            resizeMode="cover"
            source={require("../assets/youtube.png")}
          />
        </View>
      </View>

      <View
        style={[
          styles.copyrightLayout,
          globalStyles.center
        ]}
      >
        <Text style={[styles.copyrightTextLayout]}>
          Copyright © 2022 Soora. All rights reserved
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialsLayout: {
    marginBottom: 16,
  },
  socialItemLayout: {
    width: 40,
    marginLeft: 16,
    borderWidth: 1,
    height: 40,
    borderRadius: Border.br_md,
    borderColor: "#000",
    borderStyle: "solid",
  },
  socialItemIconLayout: {
    left: 8,
    top: 8,
    position: "absolute",
    width: 24,
    height: 24,
  },
  copyrightTextLayout: {
    fontSize: FontSize.size_base,
  },
  copyrightLayout: {
    borderColor: "rgba(30, 30, 30, 0.8)",
    borderTopWidth: 1,
    height: 50,
    width: "100%",
    borderStyle: "solid",
  }
});

export { Footer };
