import { Text, View } from "react-native";

const MainHeader = () => {
  return (
    <View className="bg-white border-b border-gray-200 px-4 py-6 flex-row items-center justify-between">
      <Text className="text-2xl font-bold text-gray-900">토토록</Text>
      <View className="w-10 h-10 bg-gray-300 rounded-full items-center justify-center">
        <Text className="text-gray-600 font-semibold text-sm">U</Text>
      </View>
    </View>
  );
};

export default MainHeader;
