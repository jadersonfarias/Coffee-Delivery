import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Success } from "./Pages/Success";
import { Checkout } from "./Pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
