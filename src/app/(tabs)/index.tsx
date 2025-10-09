import useGetChatList from "@/domain/chatList/apis/useGetChatList";
import RoomList from "@/domain/chatList/components/RoomList";
import { router } from "expo-router";
import { View } from "react-native";

const ChatListPage = () => {
  const { data, isLoading } = useGetChatList();

  const handleRoomPress = (id: string) => {
    router.push(`/chats/${id}`);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <RoomList
        data={data || []}
        onRoomPress={handleRoomPress}
        isLoading={isLoading}
      />
    </View>
  );
};

export default ChatListPage;
