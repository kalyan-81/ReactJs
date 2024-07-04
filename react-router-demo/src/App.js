import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import FeatureProducts from "./components/FeatureProducts";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar1 from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Profile from "./components/Profile";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import { AuthProvider } from "./components/auth";
const LazyAbout = React.lazy(() => import("./components/About"));
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="loading.....">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />,
          <Route path="products" element={<Products />}>
            <Route index element={<FeatureProducts />} />
            <Route path="features" element={<FeatureProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
