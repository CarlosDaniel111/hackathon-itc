import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SchedulePage } from "../pages/SchedulePage";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agendar" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  );
};