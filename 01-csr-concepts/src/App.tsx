import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { TodaysDatePage } from "./pages/TodaysDate";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/01-todays-date" element={<TodaysDatePage />} />
    </Routes>
  );
}
