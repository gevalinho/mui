import "./App.css";
// import { Button, Typography } from '@mui/material';
// import SettingsIcon from '@mui/icons-material/Settings';
// import AddIcon from '@mui/icons-material/Add';
// import styled from '@emotion/styled';
import Sidebar from "./components/Sidebar";
import Feeds from "./components/Feeds";
import Rightbar from "./components/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Sidebar setMode={setMode} mode={mode} />
            <Feeds />
            <Rightbar />
          </Stack>
        </Box>
        <Add />
      </ThemeProvider>
    </>
  );
}

export default App;
