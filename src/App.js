import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet, Route, Routes } from "react-router-dom";

import NikeNavBar from "./pages/NikeNavBar.js";
import Main from "./pages/Main.js";
import Men from "./pages/Men.js";
import Women from "./pages/Women.js";

function App() {
  const Layout = () => {
    return (
      <div>
        <NikeNavBar />

        <Outlet />
      </div>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
