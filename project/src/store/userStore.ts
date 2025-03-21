// src/store/index.ts
import { create } from "zustand";

// 상태 타입 정의
type UserStoreType = {
  myInfo: userInfo;
  setMyInfo: (info: userInfo) => void;
  otherInfo: userInfo;
  setOtherInfo: (info: userInfo) => void;
};

type userInfo = {
  name: string;
  imgSrc?: string;
};

// 카운터 스토어 생성
const useUserStore = create<UserStoreType>((set) => ({
  myInfo: { name: "", imgSrc: "" },
  otherInfo: { name: "", imgSrc: "data:image/jpeg;base64,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" },
  setMyInfo: (info) => set(() => ({ myInfo: info })),
  setOtherInfo: (info) => set(() => ({ otherInfo: info })),
}));

// 다른 스토어 추가 가능

export { useUserStore };
