import { styled, TextField, Typography } from "@mui/material";
import { mixinFlex } from "../../../styles/mixins";
import { CommonButton } from "../../../styles/CommonComponent";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { ChangeEvent } from "react";
import { useChatingInputStore, useChatStore, useUserStore } from "../../../store";
import { ChatType } from "../../../store/chatStore";
import ChatItem from "./ChatItem";

type PropsType = {
  user: "me" | "other";
};

const InputContainer = ({ user }: PropsType) => {
  // Store
  const { chatList, addChat } = useChatStore();

  const { myInfo, otherInfo, setMyInfo, setOtherInfo } = useUserStore();
  const { inputText, setInputText } = useChatingInputStore();

  //   Function
  function handleSubmit() {
    const addData: ChatType = {
      id: chatList.length,
      user: user,
      type: "text",
      content: inputText,
    };
    console.log(addData);
    addChat(addData);
    setInputText("");
  }

  //

  type HandleUserInfoChangeType = {
    user: "me" | "other";
    type: "name" | "image";
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  };
  const handleUserInfoChange = ({ e, user, type }: HandleUserInfoChangeType) => {
    // 텍스트 변경
    if (type === "name") {
      const name = e.target.value;
      if (user === "me") {
        setMyInfo({ ...myInfo, name: name });
      } else {
        setOtherInfo({ ...otherInfo, name: name });
      }
    }
    // 이미지 변경
    if (type === "image") {
      const imgSrc = e.target.value;
      if (user === "me") {
        setMyInfo({ ...myInfo, imgSrc });
      } else {
        setOtherInfo({ ...otherInfo, imgSrc });
      }
    }
  };

  return (
    <Container>
      {/* 미리보기 섹션 */}
      <CategoryContainer>
        <CategoryText variant="body1">미리보기</CategoryText>
        <PreviewContainer>
          <ChatItem data={{ id: 0, type: "text", user, content: inputText }} />
        </PreviewContainer>
      </CategoryContainer>

      {/* 채팅 섹션 */}
      <CategoryContainer>
        <CategoryText variant="body1">채팅</CategoryText>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          label="채팅"
          variant="outlined"
          multiline
          maxRows={2}
        />
        <CommonButton onClick={handleSubmit} variant="contained" startIcon={<SendOutlinedIcon />}>
          전송
        </CommonButton>
      </CategoryContainer>

      {/* 유저 정보 섹션 */}
      <CategoryContainer>
        <CategoryText variant="body1">유저 정보</CategoryText>
        <UserInfoForm>
          <Input
            value={user === "me" ? myInfo.name : otherInfo.name}
            onChange={(e) => handleUserInfoChange({ e, user, type: "name" })}
            label="이름"
            placeholder="예시) 이동규"
            variant="outlined"
          />
          <Input
            value={user === "me" ? myInfo.imgSrc : otherInfo.imgSrc}
            onChange={(e) => handleUserInfoChange({ e, user, type: "image" })}
            label="프로필 이미지 URL"
            placeholder="예시) https://example.com/*"
            variant="outlined"
          />
        </UserInfoForm>
      </CategoryContainer>
    </Container>
  );
};

export default InputContainer;

const Container = styled("div")`
  ${mixinFlex("column")};
  width: 100%;
  row-gap: 48px;
`;

const Input = styled(TextField)`
  width: 100%;
`;

const CategoryContainer = styled("div")`
  ${mixinFlex("column")};
  width: 100%;
  row-gap: 12px;
`;

const CategoryText = styled(Typography)`
  font-weight: bold;
  width: 100%;
  text-align: start;
  color: #333333;
`;

const UserInfoForm = styled("div")`
  ${mixinFlex("column")};
  width: 100%;
  row-gap: 12px;
`;

const PreviewContainer = styled("div")`
  ${mixinFlex("column")};
  width: 100%;
  padding: 25px;
  background-color: #000000;
  border-radius: 8px;
`;
