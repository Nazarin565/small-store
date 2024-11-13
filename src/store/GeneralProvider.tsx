/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from "react";
import { CardType } from "../types/cardType";
import { Operation } from "../types/operationType";
import { useMediaQuery, useTheme } from "@mui/material";

type ContextType = {
  cartList: CardType[];
  setCartList: React.Dispatch<React.SetStateAction<CardType[]>>;
  handleToogleItemToCart: (item: CardType) => void;
  handleDeleteItemFromCart: (itemId: number) => void;
  handleClearAllCart: () => void;
  handleChangeCount: (itemId: number, operation: Operation) => void;
  isMobile: boolean;
};

export const GeneralContext = createContext<ContextType>({
  cartList: [],
  setCartList: () => {},
  handleToogleItemToCart: () => {},
  handleDeleteItemFromCart: () => {},
  handleClearAllCart: () => {},
  handleChangeCount: () => {},
  isMobile: false,
});

type Props = {
  children: ReactNode;
};

export const GeneralProvider: React.FC<Props> = ({ children }) => {
  const [cartList, setCartList] = useState<CardType[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToogleItemToCart = (item: CardType) => {
    setCartList((prev) => {
      const isInCart = prev.some((e) => e.id === item.id);

      if (isInCart) {
        const updatedList = prev.filter((e) => e.id !== item.id);
        localStorage.setItem("cart", JSON.stringify(updatedList));
        return updatedList;
      } else {
        const updatedList = [{ ...item, count: 1 }, ...prev];
        localStorage.setItem("cart", JSON.stringify(updatedList));
        return updatedList;
      }
    });
  };

  const handleDeleteItemFromCart = (itemId: number) => {
    setCartList((prev) => {
      const updatedList = prev.filter((e) => e.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const handleClearAllCart = () => {
    setCartList([]);
    localStorage.removeItem("cart");
  };

  const handleChangeCount = (itemId: number, operation: Operation) => {
    setCartList((prev) => {
      const updatedList = prev
        .map((item) => {
          if (item.id === itemId) {
            if (operation === "plus") {
              const updatedItem = { ...item, count: item.count + 1 };
              return updatedItem;
            } else {
              const updatedItem = { ...item, count: item.count - 1 };
              return updatedItem;
            }
          }

          return item;
        })
        .filter((item) => item.count !== 0);

      localStorage.setItem("cart", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        cartList,
        setCartList,
        handleToogleItemToCart,
        handleDeleteItemFromCart,
        handleClearAllCart,
        handleChangeCount,
        isMobile,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
