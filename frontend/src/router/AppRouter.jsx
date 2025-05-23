import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { SchedulePage } from "../pages/SchedulePage";
import { MyEventsPage } from "../pages/MyEventsPage";
import { StaffPage } from "../pages/StaffPage";
import { AdminInventoryPage } from "../pages/AdminInventoryPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/agendar" element={<SchedulePage />} />
        <Route path="/my-events" element={<MyEventsPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/admin/inventory" element={<AdminInventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};