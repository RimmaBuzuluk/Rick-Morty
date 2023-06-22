import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainBlock from "../page/MainBlock";

import Page from "../page/Page";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<MainBlock />} exact />
     
      <Route path="/character/:id" element={<Page/>} />
    </Routes>
  );
};

export default AppRouter;
