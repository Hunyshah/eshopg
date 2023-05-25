"use client";
import { ReactElement, ReactNode, createContext, useState } from "react";
type BasicItemTypes = {
  title: string;
  disc: string;
  price: number;
};

type ContextStateType = {
  items: BasicItemTypes[];
  totalAmount: number;
};
const InitialState: ContextStateType = { items: [], totalAmount: 0 };
export const GlobalContext = createContext<ContextStateType>(InitialState);
// type ChildrenType = { children?: ReactElement | ReactElement[] };
type ChildrenType = {
  children?: ReactNode;
};
const ContextProvider = ({ children }: ChildrenType) => {
  const fullContext: ContextStateType = InitialState;
  // const[fullstate,setfullstate]=useState<ContextStateType>(InitialState)
  return (
    <GlobalContext.Provider value={fullContext}>
      {children}
    </GlobalContext.Provider>
  );
};
export default ContextProvider;

// "use client";

// import { ReactElement, createContext, useState } from "react";
// type ObjType = { names: string };
// export const ThemeContext = createContext<ObjType>({ names: "" });
// type ChildrenType = { children?: ReactElement | ReactElement[] };
// export default function ThemeProvider({ children }: ChildrenType) {
//   const [dta, setdta] = useState<ObjType>({ names: "honey" });
//   return <ThemeContext.Provider value={dta}>{children}</ThemeContext.Provider>;
// }
