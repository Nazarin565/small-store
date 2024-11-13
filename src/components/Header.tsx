import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { navMenu } from "../assets/constants/navMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Logo } from "./Logo";
import { GeneralContext } from "../store/GeneralProvider";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isMobile } = useContext(GeneralContext);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List component="ul">
        {navMenu.map((item) => (
          <ListItem key={item} component="li" disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                bgcolor: pathname === `/${item}` ? "#FFD012" : "#FFF",
              }}
              onClick={() => navigate(item)}
            >
              <ListItemText
                primary={item}
                sx={{ textTransform: "capitalize" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      component="header"
      sx={{ backgroundColor: "#004832", py: isMobile ? "9px" : "31px" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            padding: 0,
            marginInline: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          disableGutters
        >
          <Logo />

          {isMobile ? (
            <Box>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  bgcolor: "#FFF",
                  width: isMobile ? "34px" : "44px",
                  height: isMobile ? "34px" : "44px",
                  minWidth: 0,
                  ":hover": {
                    backgroundColor: "#FFD012",
                  },
                  mr: 1,
                }}
              >
                <MenuIcon sx={{ color: "#004832" }} />
              </IconButton>

              <IconButton
                sx={{
                  bgcolor: pathname === "/cart" ? "#FFD012" : "#FFF",
                  width: isMobile ? "34px" : "44px",
                  height: isMobile ? "34px" : "44px",
                  minWidth: 0,
                  ":hover": {
                    backgroundColor: "#FFD012",
                  },
                }}
                onClick={() => navigate("cart")}
              >
                <ShoppingCartOutlinedIcon sx={{ color: "#004832" }} />
              </IconButton>
            </Box>
          ) : (
            <>
              <List
                component="ul"
                sx={{
                  bgcolor: "#FFF",
                  display: "flex",
                  gap: "24px",
                  borderRadius: "50px",
                  p: 0,
                }}
              >
                {navMenu.map((item) => (
                  <ListItem key={item} component="li" disablePadding>
                    <ListItemButton
                      sx={{
                        color: "#000",
                        p: "10px",
                        textTransform: "capitalize",
                        borderRadius: "50px",
                        backgroundColor:
                          pathname === `/${item}` ? "#FFD012" : "#FFF",
                        textDecoration: "none",
                        ":hover": {
                          backgroundColor: "#FFD012",
                        },
                      }}
                      onClick={() => navigate(item)}
                    >
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <IconButton
                sx={{
                  bgcolor: pathname === "/cart" ? "#FFD012" : "#FFF",
                  width: isMobile ? "34px" : "44px",
                  height: isMobile ? "34px" : "44px",
                  minWidth: 0,
                  ":hover": {
                    backgroundColor: "#FFD012",
                  },
                }}
                onClick={() => navigate("cart")}
              >
                <ShoppingCartOutlinedIcon sx={{ color: "#004832" }} />
              </IconButton>
            </>
          )}
          <Drawer
            component="nav"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
