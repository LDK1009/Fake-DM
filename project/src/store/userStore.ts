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
  otherInfo: { name: "", imgSrc: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=1&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=MWsd6Rqy6E4Q7kNvgGMGyGI&_nc_oc=AdgviA6jx4DIq_GoNAgaD4pvYqXWdvMIN_GD1w-euxtpcTtzZEY6TuY3N7pNS259MXc&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=00_AYEyh3PSqsxSZASSsBsNrhbtLoH6ECI-6Q6yUaHJtgs5cQ&oe=67D2E84F" },
  setMyInfo: (info) => set(() => ({ myInfo: info })),
  setOtherInfo: (info) => set(() => ({ otherInfo: info })),
}));

// 다른 스토어 추가 가능

export { useUserStore };
