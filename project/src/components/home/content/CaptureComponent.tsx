import html2canvas from "html2canvas";
import { useRef } from "react";
import { useChatStore } from "../../../store";
import ChatItem from "./ChatItem";
import { styled } from "@mui/material";
import { CommonButton } from "../../../styles/CommonComponent";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { mixinFlex } from "../../../styles/mixins";
import Header from "./Header";
import Footer from "./Footer";

const CaptureComponent = () => {
  // Variable
  // const imgWidth = 1080; // 저장될 이미지 너비
  // const imgHeight = 1920; // 저장될 이미지 높이
  // const scaleReductionFactor = 4; // 축소 비율
  // const contentWidth = imgWidth / scaleReductionFactor; // 컨텐츠 컴포넌트 너비
  // const contentHeight = imgHeight / scaleReductionFactor; // 컨텐츠 컴포넌트 높이
  const imgWidth = 375; // 저장될 이미지 너비
  const imgHeight = 812; // 저장될 이미지 높이
  const contentWidth = imgWidth; // 컨텐츠 컴포넌트 너비
  const contentHeight = imgHeight; // 컨텐츠 컴포넌트 높이

  // Hooks
  const ref = useRef<HTMLDivElement>(null);

  // Store
  const { chatList } = useChatStore();

  // Function
  const captureImage = async () => {
    if (!ref.current) return;

    const canvas = await html2canvas(ref.current, {
      width: contentWidth,
      height: contentHeight,
      // scale: scaleReductionFactor, // 고해상도 출력
      scale: 1, // 고해상도 출력
      logging: true, // 디버깅 로그 확인
      useCORS: true, // CORS를 사용할 경우
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "capture.png";
    link.click();
  };

  // ArrayRendering
  const RenderChatList = chatList.map((el) => {
    return <ChatItem key={el.id} data={el} />;
  });

  return (
    <Container>
      <ChatingRoomContainer ref={ref} style={{ width: contentWidth, height: contentHeight }}>
        <Header />
        <ChatingScroll>
          <ChatingBox>{chatList ? RenderChatList : "채팅이 없습니다."}</ChatingBox>
        </ChatingScroll>
        <Footer />
      </ChatingRoomContainer>
      <CommonButton onClick={captureImage} startIcon={<DownloadOutlinedIcon />} style={{ marginTop: "12px" }}>
        이미지 저장
      </CommonButton>
    </Container>
  );
};

export default CaptureComponent;

const Container = styled("div")``;

const ChatingRoomContainer = styled("div")`
  ${mixinFlex("column")};
  background-color: black;
  position: relative;
  padding: 75px 0px 78px 0px;
`;

const ChatingBox = styled("div")`
  width: 100%;
  height: 100%;
  ${mixinFlex("column")};
  align-items: start;
  justify-content: end;
  padding: 25px 16px 7px 16px;
  row-gap: 7px;
  overflow: scroll;
`;

const ChatingScroll = styled("div")`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;
