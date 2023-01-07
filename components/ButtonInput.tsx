import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { globalStyles, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ButtonInput = () => {
  return (
    <>
      <View style={[styles.buttonInputLayout, globalStyles.row]}>
        <View style={{ flex: 2.8 }}>
          <TextInput style={styles.inputLayout} />
        </View >

        <View style={{ flex: 1 }}>
          <Pressable style={styles.buttonLayout}>
            <Text style={styles.buttonTextLayout}>Notify Me</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.hintLayout}>Don’t worry, we won’t spam you :)</Text>
    </>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    backgroundColor: Color.transparent,
  },
  buttonTextLayout: {
    fontSize: FontSize.size_base,
    color: Color.white,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  buttonLayout: {
    alignSelf: "flex-end",
    marginRight: -1,
    height: 36,
    width: 100,
    borderRadius: Border.br_md,
    backgroundColor: Color.black,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInputLayout: {
    paddingHorizontal: 6,
    alignItems: 'center',
    borderColor: "#0b0b0b",
    borderWidth: 0.8,
    height: 45,
    borderStyle: "solid",
    borderRadius: Border.br_md,
    maxWidth: "90%"
  },
  hintLayout: {
    marginTop: 8.25,
  }
});

export { ButtonInput };
