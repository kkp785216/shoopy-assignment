import { createContext } from "react";
import { ContextDataType } from "./useContextState";

const Context = createContext({} as ContextDataType);

export { Context };
