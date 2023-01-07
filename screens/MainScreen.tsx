import { useState } from "react";
import { StyleSheet, StatusBar, ScrollView, SafeAreaView, ImageBackground } from "react-native";
import { Color } from "../GlobalStyles";
import { Header, FirstSection, SecondSection, Footer, FullScreenAlert } from "../components";

const MainScreen = () => {
  const [isShowingAlert, setIsShowingAlert] = useState(false);

  const handleContactUsPress = () => {
    setIsShowingAlert(!isShowingAlert);
  };

  return (
    <SafeAreaView style={styles.safeAreaLayout}>
      <ImageBackground
        style={[styles.backgroundImageLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse.png")}
      >
        <ScrollView
          scrollEnabled={!isShowingAlert}
          style={[styles.scrollViewLayout]}
        >
          <Header
            style={styles.headerLayout}
            handleContactUsPress={handleContactUsPress}
          />

          <FirstSection style={styles.sectionLayout} />
          <SecondSection style={styles.sectionLayout} />

          <Footer style={styles.footerLayout} />

          <FullScreenAlert
            show={isShowingAlert}
            handleDismiss={handleContactUsPress}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImageLayout: {
    flex: 1,
    justifyContent: "center"
  },
  safeAreaLayout: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewLayout: {
    backgroundColor: Color.lightBg,
  },
  headerLayout: {
    paddingTop: 20,
  },
  sectionLayout: {
    marginTop: 60,
  },
  footerLayout: {
    marginTop: 140,
  }
});

export default MainScreen;
