import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { GeneralContext } from "../store/GeneralProvider";

export const Logo = () => {
  const { isMobile } = useContext(GeneralContext);

  return (
    <Box display="flex" alignItems="center" gap={isMobile ? "4px" : "29px"}>
      <img
        src="/logo_LivroMundo.svg"
        alt="logo"
        style={{
          width: isMobile ? "39px" : "53px",
          height: isMobile ? "43px" : "58px",
        }}
      />
      <Typography variant={isMobile ? "h6" : "h4"} fontWeight="700">
        LivroMundo
      </Typography>
    </Box>
  );
};
