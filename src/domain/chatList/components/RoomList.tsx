import { FlatList, Text, View } from "react-native";
import RoomItem from "./RoomItem";

interface RoomItemBase {
  id: string;
  title: string;
  createdAt: string;
  capacity: number;
  memberCount: number;
  status: "ongoing" | "ended";
}

interface DebateRoomItem extends RoomItemBase {
  type: "debate";
  forCount: number;
  againstCount: number;
  viewCount: number;
}

interface ChatRoomItem extends RoomItemBase {
  type: "chat";
}

type RoomData = DebateRoomItem | ChatRoomItem;

interface RoomListProps {
  data: RoomData[];
  onRoomPress?: (id: string) => void;
  isLoading?: boolean;
}

const RoomList = ({ data, onRoomPress, isLoading }: RoomListProps) => {
  const renderRoomItem = ({ item }: { item: RoomData }) => (
    <RoomItem room={item} onPress={onRoomPress} />
  );

  const renderEmptyState = () => (
    <View className="flex-1 items-center justify-center py-20">
      <Text className="text-gray-500 text-lg mb-2">방이 없습니다</Text>
      <Text className="text-gray-400 text-sm">
        새로운 토론방이나 채팅방을 만들어보세요
      </Text>
    </View>
  );

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-500">로딩 중...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderRoomItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={renderEmptyState}
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ paddingTop: 16 }}
    />
  );
};

export default RoomList;
