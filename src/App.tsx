import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import useFonts from "./hooks/useFonts";
import { store } from "./store";
import { colors } from "./constants/colors";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const fontsLoaded = useFonts();

  useEffect(() => {
    async function prepare() {
      try {
        // Artificial delay for two seconds, remove in production code
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    if (fontsLoaded) {
      prepare();
    }
  }, [fontsLoaded]); // Run prepare when fonts are loaded

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
