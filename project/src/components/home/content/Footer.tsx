import { styled } from "@mui/material";
import { mixinFlex } from "../../../styles/mixins";
import InstagramEmojiIcon from "../../../assets/icons/InstagramEmojiIcon";
import InstagramMikeIcon from "../../../assets/icons/InstagramMikeIcon";
import InstagramStickerIcon from "../../../assets/icons/InstagramStickerIcon";
import InstagramLikeIcon from "../../../assets/icons/InstagramLikeIcon";
import InstagramImageIcon from "../../../assets/icons/InstagramImageIcon";
import { useChatingInputStore, useChatStore } from "../../../store";
import { ChatType } from "../../../store/chatStore";

const Footer = () => {
  const { inputText, setInputText } = useChatingInputStore();
  const { chatList, addChat } = useChatStore();

  //   Function
  function handleSubmit() {
    const addData: ChatType = {
      id: chatList.length,
      user: "me",
      type: "text",
      content: inputText,
    };
    addChat(addData);
    setInputText("");
  }

  return (
    <Container>
      <InputContainer>
        <EmojiInputWrap>
          <InstagramEmojiIcon />
          <Input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="메시지 입력..." />
        </EmojiInputWrap>
        {inputText ? (
          <SendText onClick={handleSubmit}>Send</SendText>
        ) : (
          <IconWraper>
            <InstagramMikeIcon />
            <InstagramImageIcon />
            <InstagramStickerIcon />
            <InstagramLikeIcon />{" "}
          </IconWraper>
        )}
      </InputContainer>
    </Container>
  );
};

export default Footer;

const Container = styled("div")`
  ${mixinFlex("row")};
  width: 100%;
  height: 78px;
  padding: 17px;
  position: absolute;
  z-index: 100;
  bottom: 0px;
  left: 0px;

  & svg {
    color: white;
    padding: 8px;
    box-sizing: content-box;
  }
`;

const InputContainer = styled("div")`
  flex: 1;
  padding: 0px 16px 0px 11px;
  ${mixinFlex("row")};
  justify-content: space-between;
  border: 1px solid rgb(54, 54, 54);
  border-radius: 22px;
`;

const EmojiInputWrap = styled("div")`
  flex: 1;
  ${mixinFlex("row")}
`;

const Input = styled("input")`
  width: 100%;
  border: none;
  background-color: #000000;
  font-size: 15px;
  color: rgb(245, 245, 245);
  outline: none;
  font &:focus {
    border: none;
    outline: none;
  }
`;

const IconWraper = styled("div")`
  ${mixinFlex("row")}
`;

const SendText = styled("button")`
  all: unset;  /* 모든 기본 스타일 제거 */
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;  /* 수정: 18x → 18px */
  color: rgb(0, 149, 246);
  cursor: pointer;  /* 버튼 클릭 시 커서 스타일 추가 */
`;
