import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Typography } from "@mui/material";
import { CardType } from "../types/cardType";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext } from "react";
import { GeneralContext } from "../store/GeneralProvider";

type Props = {
  item: CardType;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const { isMobile, handleChangeCount, handleDeleteItemFromCart } =
    useContext(GeneralContext);

  const totalItemPrice = item.count * item.price;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap="20px"
      alignItems="center"
    >
      <Box
        bgcolor="#3030301A"
        borderRadius="30px"
        p="10px"
        display="flex"
        alignItems="center"
        gap="24px"
        width="100%"
      >
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "105px",
            height: "105px",
            objectFit: "cover",
            borderRadius: "30px",
          }}
        />

        <Box
          width="100%"
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          gap={isMobile ? "12px" : "44px"}
          justifyContent="flex-end"
        >
          <Typography>{item.name}</Typography>
          <Typography>{item.price} USD</Typography>

          <Box>
            <Box display="flex" gap={1} alignItems="center">
              <Button
                sx={{ p: 0, minWidth: 0, color: "#000" }}
                onClick={() => handleChangeCount(item.id, "minus")}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Typography
                sx={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #252525",
                  borderRadius: "5px",
                  borderColor: item.count === 10 ? "red" : "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.count}
              </Typography>
              <Button
                sx={{ p: 0, minWidth: 0, color: "#000" }}
                onClick={() =>
                  item.count < 10 && handleChangeCount(item.id, "plus")
                }
              >
                <AddIcon fontSize="small" />
              </Button>
            </Box>
            {item.count === 10 && (
              <Typography color="red" variant="subtitle2" position="absolute">
                10 is maximum
              </Typography>
            )}
          </Box>

          <Typography>{totalItemPrice} USD</Typography>
        </Box>
      </Box>
      <Button
        sx={{ p: 0, minWidth: "24px" }}
        onClick={() => handleDeleteItemFromCart(item.id)}
      >
        <DeleteIcon sx={{ color: "#000" }} />
      </Button>
    </Box>
  );
};
