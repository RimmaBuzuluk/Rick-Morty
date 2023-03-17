import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainBlock from "../page/MainBlock";
import { route } from "../routes";
import { MAIN_BLOCK } from "../utils/consts";

const AppRouter = () => {
  return (
    <Routes>
      {route.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<MainBlock to={MAIN_BLOCK} />} />
    </Routes>
  );
};

export default AppRouter;
