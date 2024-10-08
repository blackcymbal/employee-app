import { useColorScheme } from "@/hooks/useColorScheme";
import { store } from "@/store/store";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={DefaultTheme}>
        <NativeBaseProvider>
          <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName="index"
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="employeeListScreen" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </NativeBaseProvider>
      </ThemeProvider>
    </Provider>
  );
}
