import { ReactElement, createContext, useState } from "react";
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
type ChildrenType = { children?: ReactElement | ReactElement[] };

const ContextProvider: React.FC = ({ children }: ChildrenType) => {
  // const[fullstate,setfullstate]=useState<BasicItemTypes>()
  return (
    <>
      <GlobalContext.Provider
        value={{ items: [], totalAmount: 1 }}
      ></GlobalContext.Provider>
    </>
  );
};
