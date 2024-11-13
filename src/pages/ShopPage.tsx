import { Button, Container, Grid2, Typography } from "@mui/material";
import { Card } from "../components/Card";
import { cardsList } from "../assets/constants/cardsList";

export const ShopPage = () => {
  return (
    <Container
      maxWidth="lg"
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "38px",
      }}
      disableGutters
    >
      <Typography variant="h4" textTransform="uppercase" color="#002700">
        Shop
      </Typography>

      <Grid2
        container
        columnSpacing="20px"
        rowSpacing="38px"
        justifyContent="center"
      >
        {cardsList.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Grid2>

      <Button
        sx={{
          color: "#002700",
          bgcolor: "#FFD012",
          boxShadow: "0 4px 4px 0 #00000040",
          py: "21px",
          px: "76.5px",
          borderRadius: "30px",
        }}
      >
        See more
      </Button>
    </Container>
  );
};
