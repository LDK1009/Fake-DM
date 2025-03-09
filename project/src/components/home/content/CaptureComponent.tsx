import html2canvas from "html2canvas";
import { useEffect, useRef } from "react";
import { useChatStore } from "../../../store";
import ChatItem from "./ChatItem";
import { styled } from "@mui/material";
import { CommonButton } from "../../../styles/CommonComponent";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { mixinFlex } from "../../../styles/mixins";
import Header from "./Header";
import Footer from "./Footer";
import ChatProfile from "./ChatProfile";

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
  const chatingScrollRef = useRef<HTMLDivElement>(null);

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

  const scrollToBottom = () => {
    if (chatingScrollRef.current) {
      chatingScrollRef.current.scrollTop = chatingScrollRef.current.scrollHeight;
    }
  };

  // ArrayRendering
  const RenderChatList = chatList.map((el) => {
    return <ChatItem key={el.id} data={el} />;
  });

  // useEffect
  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  return (
    <>
      <Container>
        <ChatingRoomContainer ref={ref} style={{ width: contentWidth, height: contentHeight }}>
          <Header />
          <ChatingScroll ref={chatingScrollRef}>
            <ChatProfile />
            {chatList && RenderChatList}
          </ChatingScroll>
          <Footer />
        </ChatingRoomContainer>
        <SaveButton onClick={captureImage} startIcon={<DownloadOutlinedIcon />}>
          이미지 저장
        </SaveButton>
      </Container>
    </>
  );
};

export default CaptureComponent;

const Container = styled("div")`
  ${mixinFlex("column")}
`;

const ChatingRoomContainer = styled("div")`
  ${mixinFlex("column")};
  background-color: black;
  position: relative;
  padding: 75px 0px 78px 0px;
`;

const ChatingScroll = styled("div")`
  width: 100%;
  height: 100%;

  ${mixinFlex("column")};
  align-items: start;
  justify-content: start;
  padding: 25px 16px 7px 16px;
  row-gap: 7px;

  overflow-y: scroll;

  /* Chrome, Safari, Opera*/
  &::-webkit-scrollbar {
    display: none;
  }
  /* Firefox */
  scrollbar-width: none;
  /* IE and Edge */
  -ms-overflow-style: none;
`;

const SaveButton = styled(CommonButton)`
  margin-top: 12px;
  width: 90%;
  height: 50px;
  align-self: center;
`;
