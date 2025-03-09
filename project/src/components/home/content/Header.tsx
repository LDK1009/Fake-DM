import { styled, Typography } from "@mui/material";
import { mixinFlex } from "../../../styles/mixins";
import { useUserStore } from "../../../store";
import InstagramCallIcon from "../../../assets/icons/InstagramCallIcon";
import InstagramCameraIcon from "../../../assets/icons/InstagramCameraIcon";
import InstagramInfoIcon from "../../../assets/icons/InstagramInfoIcon";

const Header = () => {
  const { otherInfo } = useUserStore();

  return (
    <Container>
      <ImageNameWrap>
        <ProfileImage src={otherInfo.imgSrc} />
        <Name>{otherInfo.name}</Name>
      </ImageNameWrap>
      <IconWrap>
        <Icon>
          <InstagramCallIcon />
        </Icon>
        <Icon>
          <InstagramCameraIcon />
        </Icon>
        <Icon>
          <InstagramInfoIcon />
        </Icon>
      </IconWrap>
    </Container>
  );
};

export default Header;

const Container = styled("div")`
  ${mixinFlex("row")};
  width: 100%;
  height: 75px;
  padding: 0px 16px;
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(38, 38, 38);

  & svg {
    color: white;
  }
`;

const ImageNameWrap = styled("div")`
  ${mixinFlex("row")}
  column-gap:22px;
`;

const ProfileImage = styled("img")`
  width: 44px;
  height: 44px;
  border-radius: 100%;
`;

const Name = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: #f5f5f5;
`;

const IconWrap = styled("div")`
  ${mixinFlex("row")};
`;

const Icon = styled("div")`
  ${mixinFlex("column")};
  width: 40px;
  height: 40px;
`;
