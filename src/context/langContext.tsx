import { createContext, Dispatch, SetStateAction, useState } from "react";
export const langContext = createContext(
  {} as {
    locale: "es" | "en";
    locales: ["es", "en"];
    legal: [boolean, Dispatch<SetStateAction<boolean>>];
  }
);
interface langProps {
  locale: "es" | "en";
  locales: ["es", "en"];
  children?: React.ReactNode;
}
export const LangProvider = (props: langProps) => {
  return (
    <langContext.Provider value={{ ...props, legal: useState(false) }}>
      {props.children}
    </langContext.Provider>
  );
};