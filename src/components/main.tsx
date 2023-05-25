"use client";
import React, { ReactNode } from "react";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";
const MainSection = () => {
  const { totalAmount } = useContext(GlobalContext);
  return (
    // es main next component ho ga item list ho ge sath form ho ga
    <>
      <div>MainSection</div>
      <h1>{totalAmount}</h1>
    </>
  );
};

export default MainSection;
