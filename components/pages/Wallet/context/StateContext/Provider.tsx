import { Context } from "./Context";
import { useContextState } from "./useContextState";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const contextValue = useContextState();
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Provider };
