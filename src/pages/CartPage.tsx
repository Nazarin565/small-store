import {
  Box,
  Button,
  Container,
  Divider,
  List,
  Typography,
} from "@mui/material";
import { CartItem } from "../components/CartItem";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { PaymentForm } from "../components/PaymentFormComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { GeneralContext } from "../store/GeneralProvider";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  const { cartList, handleClearAllCart, isMobile } = useContext(GeneralContext);
  const navigate = useNavigate();

  const subtotal = cartList.reduce(
    (acc, { price, count }) => (acc += price * count),
    0
  );

  return (
    <Container
      maxWidth={isMobile ? "sm" : "lg"}
      sx={{
        bgcolor: "#FFF",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        borderRadius: "30px",
      }}
      disableGutters
    >
      <Box
        p={isMobile ? "15px" : "60px"}
        display="flex"
        flexDirection="column"
        gap="24px"
        flex={2}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant={isMobile ? "h6" : "h5"}>
            Shopping Cart
          </Typography>
          <Button onClick={handleClearAllCart}>
            <DeleteIcon fontSize="small" />
            Clear all cart
          </Button>
        </Box>
        <Divider sx={{ bgcolor: "#D9D9D9" }} />

        <Box display="flex" flexDirection="column" gap="24px">
          {cartList.length ? (
            cartList.map((item) => (
              <List key={item.id} sx={{ p: 0 }}>
                <CartItem item={item} />
              </List>
            ))
          ) : (
            <Typography
              variant={isMobile ? "h6" : "h5"}
              textAlign="center"
              padding={isMobile ? 1 : 6}
              border={1}
            >
              Any products in cart. Add something in the shop!
            </Typography>
          )}
        </Box>

        <Box
          display="flex"
          flexDirection={isMobile ? "column-reverse" : "row"}
          justifyContent="space-between"
          alignItems={isMobile ? "flex-start" : "center"}
          width="90%"
          gap={isMobile ? "19px" : "0"}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              color: "#000",
              textDecoration: "none",
            }}
            onClick={() => navigate("/shop")}
          >
            <KeyboardArrowLeftIcon />
            <Typography
              variant={isMobile ? "body2" : "body1"}
              sx={{
                textTransform: "lowercase",
                ":first-letter": {
                  textTransform: "uppercase",
                },
              }}
            >
              Back to shop
            </Typography>
          </Button>

          <Box display="flex" alignItems="center" gap="77px">
            <Typography>Subtotal</Typography>
            <Typography color="#004832" fontWeight="700">
              {subtotal} USD
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        bgcolor="#004832"
        flex={1}
        p={isMobile ? "15px" : "60px"}
        sx={{
          borderEndEndRadius: "30px",
          borderStartEndRadius: isMobile ? "0" : "30px",
          borderEndStartRadius: isMobile ? "30px" : "0",
        }}
        color="#fff"
        display="flex"
        flexDirection="column"
        gap="24px"
      >
        <Typography variant={isMobile ? "h6" : "h5"}>Card details</Typography>
        <Divider sx={{ bgcolor: "#D9D9D9" }} />

        <Typography>Select payment method</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <img src="/paymentMethods/mastercard.png" alt="mastercard" />
          <img src="/paymentMethods/apple-pay.png" alt="apple pay" />
          <img src="/paymentMethods/visa.png" alt="visa" />
        </Box>

        <PaymentForm />
      </Box>
    </Container>
  );
};
