import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import InputContainer from "./InputContainer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function InputSelectTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Container>
      <TabsContainer>
        <StyledTabs sx={{ width: "100%" }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="상대방" />
          <Tab label="나" />
        </StyledTabs>
      </TabsContainer>
      <CustomTabPanel value={value} index={0}>
        <InputContainer user="other" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <InputContainer user="me" />
      </CustomTabPanel>
    </Container>
  );
}

const Container = styled(Box)`
  width: 100%;
`;

const TabsContainer = styled(Box)`
  border-bottom: 1px solid lightblue;
`;

const StyledTabs = styled(Tabs)`
  width: 100%;
  & button {
    flex: 1;
  }
`;
