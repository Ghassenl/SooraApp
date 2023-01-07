import { Image, View, StyleSheet, ImageSourcePropType, ViewProps } from "react-native";

export type SectionImagesProps = ViewProps & {
  images: [ImageSourcePropType, ImageSourcePropType],
};

const SectionImages = (props: SectionImagesProps) => {
  return (
    <View style={props.style}>
      <View >
        <Image
          style={styles.secondImageLayout}
          resizeMode="cover"
          source={props.images[0]}
        />
        <Image
          style={styles.firstImageLayout}
          resizeMode="cover"
          source={props.images[1]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstImageLayout: {
    left: -72,
    top: 8,
  },
  secondImageLayout: {
    top: -15,
    left: 74,
    position: "absolute",
  },
});

export { SectionImages };
