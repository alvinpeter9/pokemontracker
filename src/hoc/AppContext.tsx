import React, { createContext } from "react";

type AppContextType = {
  selectedPokemon: string | null;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string | null>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  LanguageOptions: { [key: string]: string };
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used with AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPokemon, setSelectedPokemon] = React.useState<string | null>(
    null
  );
  const LanguageOptions = {
    ENGLISH: "en",
    YODA: "yd",
  };
  const [language, setLanguage] = React.useState<string>(LanguageOptions.ENGLISH);
  return (
    <AppContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
        language,
        setLanguage,
        LanguageOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
