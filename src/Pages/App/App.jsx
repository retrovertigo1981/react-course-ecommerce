import { useRoutes, BrowserRouter } from "react-router-dom";
import { EcommerceProvider } from "../../EcommerceContext";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/mens-clothing", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/womens-clothing", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder/> },
    { path: "/my-orders/:id", element: <MyOrder/> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <div className="scroll">
       <EcommerceProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes/>
          <ProductDetail />
          <CheckoutSideMenu/> 
        </Layout>
      </BrowserRouter>
    </EcommerceProvider>
    </div>
   
  );
}

export default App;
