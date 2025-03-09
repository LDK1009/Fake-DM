// src/store/index.ts
import { create } from "zustand";

// 상태 타입 정의
type ChatingInputStore = {
  inputText: string;
  setInputText: (text: string) => void;
};

// 카운터 스토어 생성
const useChatingInputStore = create<ChatingInputStore>((set) => ({
  inputText: "",
  setInputText: (text) => set(() => ({ inputText: text })),
}));

// 다른 스토어 추가 가능

export { useChatingInputStore };
