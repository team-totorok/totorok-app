import { Text, View } from "react-native";

const ChatListPage = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Chats</Text>
      <Text className="text-gray-500 mt-2">
        여기에 채팅 리스트가 표시됩니다.
      </Text>
    </View>
  );
};

export default ChatListPage;
