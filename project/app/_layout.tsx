import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { 
  useFonts, 
  NotoSansKR_400Regular, 
  NotoSansKR_500Medium, 
  NotoSansKR_700Bold 
} from '@expo-google-fonts/noto-sans-kr';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'NotoSansKR-Regular': NotoSansKR_400Regular,
    'NotoSansKR-Medium': NotoSansKR_500Medium,
    'NotoSansKR-Bold': NotoSansKR_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
        <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}