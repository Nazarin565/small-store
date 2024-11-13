import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { GeneralContext } from "./store/GeneralProvider";

export const App = () => {
  const { isMobile } = useContext(GeneralContext);

  return (
    <Box
      sx={{
        marginInline: "auto",
        backgroundColor: "#F8D8B8",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        gap: isMobile ? "60px" : "130px",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box component="main" flexGrow={1}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};
