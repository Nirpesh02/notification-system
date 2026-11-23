import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Client Side Pages
import ClientLayout from "./client/ClientLayout";
import ClientDashboard from "./client/ClientDashboard";
import MyServices from "./client/MyServices";
import ClientHistory from "./client/ClientHistory";
import AccountRegistration from "./client/AccountRegistration";

// Admin Side Pages
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import ManageAccounts from "./admin/ManageAccounts";
import ChannelControls from "./admin/ChannelControls";
import SystemLogs from "./admin/SystemLogs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Client Side Routes */}
        <Route element={<ClientLayout />}>
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/myservice" element={<MyServices />} />
          <Route path="/history" element={<ClientHistory />} />
          <Route path="/account" element={<AccountRegistration />} />
        </Route>

        {/* Admin Side Routes (/admin) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="accounts" element={<ManageAccounts />} />
          <Route path="channels" element={<ChannelControls />} />
          <Route path="logs" element={<SystemLogs />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}