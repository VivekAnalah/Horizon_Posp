import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";

const App = () => {
  return (
    <Routes>
      {/* <Route path="auth/*" element={<AuthLayout />} /> */}
      <Route path="pos/*" element={<AdminLayout />} />
      
      <Route path="/" element={<Navigate to="/pos" replace />} />
    </Routes>
  );
};

export default App;
