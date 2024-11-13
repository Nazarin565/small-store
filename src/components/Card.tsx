import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { GeneralContext } from "../store/GeneralProvider";
import { CardType } from "../types/cardType";

type Props = {
  card: CardType;
};

export const Card: React.FC<Props> = ({ card }) => {
  const { cartList, handleToogleItemToCart } = useContext(GeneralContext);

  const isInCart = cartList.some((item) => item.id === card.id);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <img
        src={card.img}
        alt={card.name}
        style={{
          width: "307px",
          height: "276px",
          objectFit: "cover",
          borderRadius: "30px",
        }}
      />

      <Box
        sx={{
          p: "10px",
          bgcolor: "#FFF",
          width: "100%",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography>"{card.name}"</Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography
            color="#FF0000"
            textAlign="center"
            sx={{ py: "10px", width: "100%" }}
          >
            {card.price} $
          </Typography>
          <Button
            sx={{
              py: "10px",
              color: "#002700",
              minWidth: 0,
              px: 0,
              mx: "auto",
              bgcolor: isInCart ? "#F0F0F0" : "#FFD012",
              width: "100%",
              borderRadius: "50px",
            }}
            onClick={() => handleToogleItemToCart(card)}
          >
            {isInCart ? "In Cart" : "Buy"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
