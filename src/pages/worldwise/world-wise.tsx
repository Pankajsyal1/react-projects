import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import CityList from "./components/city/list/CityList";
import CountryList from "./components/country/list/CountryList";
import City from "./components/city/City";
import Form from "./components/form/Form";
import SpinnerFullPage from "./components/spinner/full-page/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/home/Homepage"));
const Product = lazy(() => import("./pages/product/Product"));
const Pricing = lazy(() => import("./pages/pricing/Pricing"));
const Login = lazy(() => import("./pages/login/Login"));
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const PageNotFound = lazy(() => import("./PageNotFound"));

function WorldWiseView() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default WorldWiseView;
