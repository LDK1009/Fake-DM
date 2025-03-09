import { styled } from "@mui/material";
import { ChatType } from "../../../store/chatStore";
import { useUserStore } from "../../../store";

type PropsType = {
  data: ChatType;
};

const ChatItem = ({ data: { user, content } }: PropsType) => {
  const { otherInfo } = useUserStore();
  return (
    <Container user={user}>
      {user === "other" && otherInfo.imgSrc && <PropfileImage src={otherInfo.imgSrc} />}
      <SpeechBubbleContainer user={user}>
        <Text>{content}</Text>
      </SpeechBubbleContainer>
    </Container>
  );
};

export default ChatItem;

type ContainerType = {
  user: "me" | "other";
};

const Container = styled("div")<ContainerType>(({ user }) => ({
  display: "flex",
  alignItems: "end",
  alignSelf: user === "me" ? "end" : "start",
}));

type SpeechBubbleContainerType = {
  user: "me" | "other";
};

const SpeechBubbleContainer = styled("div")<SpeechBubbleContainerType>(({ user }) => ({
  maxWidth: "160px",
  padding: "7px 12px",
  fontWeight: "400",
  fontSize: "15px",
  backgroundColor: user === "me" ? "#3797F0" : "#262626",
  color: user === "me" ? "#FFFFFF" : "#F5F5F5",
  borderRadius: user === "me" ? "18px 4px 18px 18px" : "18px 18px 18px 4px",
}));

const Text = styled("div")`
  width: 100%;
  white-space: pre-wrap;
`;

const PropfileImage = styled("img")`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  margin-right: 4px;
`;
