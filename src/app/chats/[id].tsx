import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ChatRoomPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Chat Room</Text>
      <Text className="text-gray-500 mt-2">id: {id}</Text>
    </View>
  );
};
export default ChatRoomPage;
