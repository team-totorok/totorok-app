import MainHeader from "@/common/components/MainHeader";
import { queryClient } from "@/common/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1" edges={["top"]}>
        <StatusBar barStyle={"dark-content"} />
        <MainHeader />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="mypage" />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
