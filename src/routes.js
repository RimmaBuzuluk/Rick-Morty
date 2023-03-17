import MainBlock from "./page/MainBlock";
import Page from "./page/Page";
import { MAIN_BLOCK, PAGE } from "./utils/consts.js";

export const route = [
  { path: MAIN_BLOCK, Component: MainBlock },
  { path: PAGE + "/:id", Component: Page },
];
