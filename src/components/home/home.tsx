import React, { FC } from "react";
import { Content } from "./content/content";
import { TopBar } from "./top-bar/top-bar";

export const Home: FC = () => {
  return (
    <>
      <TopBar />
      <Content />
    </>
  );
};
