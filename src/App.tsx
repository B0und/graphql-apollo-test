import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Page1 />} />
        <Route path="url1" element={<Page1 />} />
        <Route path="url2" element={<Page2 />} />
        <Route path="url3" element={<Page3 />} />
      </Route>
    </Routes>
  );
}

export default App;
