import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

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

interface RoomItemProps {
  room: RoomData;
  onPress?: (id: string) => void;
}

const RoomItem = ({ room, onPress }: RoomItemProps) => {

  const getRoomTypeText = (type: string) => {
    return type === "debate" ? "토론" : "채팅";
  };

  const getRoomTypeStyle = (type: string) => {
    return type === "debate" 
      ? "bg-green-100 border-green-200" 
      : "bg-orange-100 border-orange-200";
  };

  const getRoomTypeTextColor = (type: string) => {
    return type === "debate" ? "text-green-700" : "text-orange-700";
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-lg p-4 mb-3 mx-4 shadow-sm border border-gray-100 active:bg-gray-50 h-20"
      onPress={() => onPress?.(room.id)}
    >
      <View className="flex-row items-center flex-1">
        {/* 칩과 제목 영역 */}
        <View className="flex-1 mr-3">
          <View className="flex-row items-center">
            {/* 방 타입 칩 */}
            <View className={`flex-row items-center px-2 py-1 rounded-full border mr-3 ${getRoomTypeStyle(room.type)}`}>
              <Text className={`text-xs font-medium ${getRoomTypeTextColor(room.type)}`}>
                {getRoomTypeText(room.type)}
              </Text>
            </View>
            
            {/* 제목 */}
            <Text className="text-sm font-semibold text-gray-900 leading-4 flex-1" numberOfLines={2}>
              {room.title}
            </Text>
          </View>
        </View>

        {/* 참여 인원 */}
        <View className="flex-row items-center">
          <Ionicons name="people" size={12} color="#6B7280" />
          <Text className="text-xs text-gray-600 ml-1">
            {room.memberCount}/{room.capacity}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoomItem;
