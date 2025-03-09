import { styled } from "@mui/material";
import CaptureComponent from "./content/CaptureComponent";
import { mixinFlex } from "../../styles/mixins";
import InputSelectTab from "./content/InputSelectTab";

const HomeContainer = () => {
  return (
    <Container>
      <CaptureComponent />
      <InputSelectTab />
    </Container>
  );
};

export default HomeContainer;

const Container = styled("div")`
  ${mixinFlex("column")};
  row-gap: 80px;
`;
