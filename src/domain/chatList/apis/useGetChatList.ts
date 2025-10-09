import { useQuery } from "@tanstack/react-query";

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
type RoomItem = DebateRoomItem | ChatRoomItem;

const getChatList = async (): Promise<RoomItem[]> => {
  return [
    {
      id: "1",
      title: "토토록은 뭐야",
      type: "debate",
      createdAt: "2025-10-10",
      capacity: 10,
      memberCount: 8,
      forCount: 4,
      againstCount: 4,
      status: "ongoing",
      viewCount: 10,
    },
    {
      id: "2",
      title:
        "사람의 뇌 구조를 완전히 똑같이 복제하여 그 사람과 똑같은 사이보그를 만들어냈을 때 생명으로 존중 가능한가?",
      type: "debate",
      createdAt: "2025-10-10",
      capacity: 8,
      memberCount: 8,
      forCount: 4,
      againstCount: 4,
      status: "ongoing",
      viewCount: 10,
    },
    {
      id: "3",
      title: "우리에게 보이는 색이 남들에게 보이는 색과 같은 색으로 보일까?",
      type: "debate",
      createdAt: "2025-10-10",
      capacity: 8,
      memberCount: 8,
      forCount: 4,
      againstCount: 4,
      status: "ongoing",
      viewCount: 10,
    },
    {
      id: "4",
      title:
        "본인의 벨트 끈 높이를 분명하게 입어보자. 바로 상위범주를 극적으로 내보자.",
      type: "chat",
      createdAt: "2025-10-10",
      capacity: 8,
      memberCount: 8,
      status: "ongoing",
    },
  ];
};

const useGetChatList = () => {
  return useQuery({
    queryKey: ["chatList"],
    queryFn: getChatList,
  });
};

export default useGetChatList;
