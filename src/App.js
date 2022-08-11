import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { LOADER_IMG } from "./constants/constant";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex h-screen">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <img
                  className="h-24 w-auto"
                  src={LOADER_IMG}
                  alt="loader logo"
                />
                <h1>Loading...</h1>
              </div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
