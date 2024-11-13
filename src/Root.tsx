import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";
import { WelcomePage } from "./pages/WelcomePage";
import { GeneralProvider } from "./store/GeneralProvider";
import { App } from "./App";

export const Root = () => {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<WelcomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<WelcomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
};
