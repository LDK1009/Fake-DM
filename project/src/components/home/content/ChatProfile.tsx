import { styled, Typography } from "@mui/material";
import { useUserStore } from "../../../store";
import { mixinFlex } from "../../../styles/mixins";

const ChatProfile = () => {
  const { otherInfo } = useUserStore();

  return (
    <Container>
      <Image src={otherInfo.imgSrc} />
      <Name>{otherInfo.name}</Name>
      <CaptionText>Instagram</CaptionText>
      <ViewProfileButton>프로필 보기</ViewProfileButton>
    </Container>
  );
};

export default ChatProfile;

const Container = styled("div")`
  ${mixinFlex("column")};
  align-self: center;
`;

const Image = styled("img")`
  width: 96px;
  height: 96px;
  border-radius: 100%;
  margin-top: 36px;
`;

const Name = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
  color: #f5f5f5;
`;

const CaptionText = styled("div")`
  font-size: 14x;
  font-weight: 400;
  color: rgb(168, 168, 168);
`;
const ViewProfileButton = styled("div")`
  ${mixinFlex("column")}
  width: 100px;
  height: 32px;
  background-color: rgb(54, 54, 54);
  font-size: 15px;
  font-weight: bold;
  color: rgb(245, 245, 245);
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 32px;
`;
