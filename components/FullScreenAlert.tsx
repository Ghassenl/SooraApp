import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Color, FontFamily, FontSize, globalStyles, Margin } from "../GlobalStyles";

export type FullScreenAlertProps = {
  show?: boolean;
  handleDismiss?: () => void,
}

const FullScreenAlert = (props: FullScreenAlertProps) => {
  return (
    <Pressable
      onPress={props.handleDismiss}
      style={[
        styles.alertWrapperLayout,
        {
          display: props.show ? "flex" : "none",
        },
      ]}
    >
      <View
        style={[
          styles.alertLayout,
          globalStyles.center,
        ]}
      >
        <View>
          <Text style={styles.reachOutLayout}>
            Reach out to us through
          </Text>

          <View
            style={[styles.emailWrapperLayout, globalStyles.row, globalStyles.center]}
          >
            <Text style={styles.emailLayout}>
              sooratheapp@gmail.com
            </Text>

            <View style={[styles.copyLayout, globalStyles.column, globalStyles.center]}>
              <Image
                resizeMode="cover"
                source={require("../assets/copy.png")}
              />
              <Text style={styles.copyTextLayout}>
                copy
              </Text>
            </View>
          </View>
        </View>
      </View>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  alertWrapperLayout: {
    alignItems: "center",
    paddingTop: "100%",
    width: "100%",
    height: "100%",
    backgroundColor: Color.lightBlack,
    zIndex: 99999,
    position: "absolute",
  },
  alertLayout: {
    borderRadius: 8,
    paddingHorizontal: 50,
    paddingVertical: 40,
    width: "90%",
    backgroundColor: Color.white,
  },
  reachOutLayout: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    color: Color.lightBlack,
    fontSize: FontSize.size_base,
  },
  emailWrapperLayout: {
    marginTop: Margin.m_lg,
  },
  emailLayout: {
    fontSize: 14,
    color: Color.blue,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 17,
    marginRight: 16,
    fontFamily: FontFamily.inter,
  },
  copyLayout: {
    height: 32,
  },
  copyTextLayout: {
    fontSize: FontSize.size_sm,
    marginTop: 2,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
});

export { FullScreenAlert };
