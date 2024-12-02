import { createContext, useState } from "react";

//5 creo las interfaces del context
interface ExampleContext {
  state: boolean;
  setState: (value: boolean) => void;
}

//2 Creo el context
// 6 Agrego el tipo al context
export const exampleContext = createContext<ExampleContext>({
  state: false,
  setState: () => {},
});

//1 Creo el provider (wrapper)
const ExampleProvider = ({ children }: { children: React.ReactNode }) => {
  // Genero el codigo o los estados que quiera compartir
  const [state, setState] = useState(false);
  //4 Agrego el return y paso los values que quiera compartir
  return (
    <exampleContext.Provider value={{ state, setState }}>
      {children}
    </exampleContext.Provider>
  );
};

export default ExampleProvider;
