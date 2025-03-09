// src/store/index.ts
import { create } from "zustand";

// 상태 타입 정의
type ChatStoreType = {
  chatList: ChatType[];
  addChat: (chat: ChatType) => void;
};

export type ChatType = {
  id: number;
  user : "me" | "other";
  type: "text" | "image" | "story";
  content: string;
};

// 대화 추가
function addChat(prev: ChatType[], chat: ChatType) {
  const nextChatList = [...prev, chat];

  return nextChatList;
}

// 카운터 스토어 생성
const useChatStore = create<ChatStoreType>((set) => ({
  chatList: [],
  addChat: (chat) => set((state) => ({ chatList: addChat(state.chatList, chat) })),
}));

// 다른 스토어 추가 가능

export { useChatStore };
