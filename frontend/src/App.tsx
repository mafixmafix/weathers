import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { WeatherPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WeatherPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
