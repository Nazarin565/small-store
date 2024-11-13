import { Box, Container, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { SocialIcon } from "./SocialIcon";
import { ContactsLink } from "./ContactsLink";
import { Logo } from "./Logo";
import { useContext } from "react";
import { GeneralContext } from "../store/GeneralProvider";

export const Footer = () => {
  const { isMobile } = useContext(GeneralContext);

  return (
    <Box
      component="footer"
      bgcolor="#004832"
      py={isMobile ? "30px" : "60px"}
      width="100%"
      color="#FFF"
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "32px" : "0",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={isMobile ? "center" : "flex-start"}
          gap="12px"
        >
          <Logo />

          <Box display="flex" gap="12px">
            <SocialIcon href="https://www.facebook.com" Icon={FacebookIcon} />
            <SocialIcon href="https://www.instagram.com" Icon={InstagramIcon} />
            <SocialIcon href="https://www.x.com" Icon={TwitterIcon} />
            <SocialIcon href="https://www.pinterest.com" Icon={PinterestIcon} />
          </Box>

          <Typography>©"LivroMundo" JSC, 2023 - 2024</Typography>
        </Box>

        <Box maxWidth="260px">
          <ContactsLink
            href="https://www.google.com.ua/maps/place/Statensingel+52,+3039+LP+Rotterdam,+%D0%9D%D1%96%D0%B4%D0%B5%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8/@51.9289958,4.4598926,17z/data=!3m1!4b1!4m6!3m5!1s0x47c434b0fefde7ed:0x108af788f4eb62f7!8m2!3d51.9289958!4d4.4624675!16s%2Fg%2F11fnpnd7xj?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
            text="Statensingel 52, 3039 LP Rotterdam, Netherlands"
            Icon={PlaceIcon}
            target="_blank"
          />
          <ContactsLink
            href="tel:+31618426954"
            text="+31 6 18426954"
            Icon={CallIcon}
          />
          <ContactsLink
            href="mailto:info@moviestore.nl"
            text="info@moviestore.nl"
            Icon={EmailIcon}
          />
        </Box>
      </Container>
    </Box>
  );
};
