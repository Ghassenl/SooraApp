import { StyleSheet } from "react-native";

export const FontFamily = {
  inter: "Inter",
};

export const FontSize = {
  size_sm: 10,
  size_base: 12,
  size_lg: 36,
};

export const Color = {
  white: "#fff",
  lightBg: "#f6f6f60f",
  blue: "#3b5998",
  black: "#0b0b0b",
  lightBlack: "rgba(30, 30, 30, 0.8)",
  transparent: "#ffffff00",
};

export const Margin = {
  m_sm: 0,
  m_md: 8,
  m_lg: 16,
};

export const Border = {
  br_sm: 2,
  br_md: 100,
};

export const globalStyles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  }
});