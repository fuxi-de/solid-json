import { createContext, createSignal } from "solid-js";
import { JsonProperty } from "./App";

export const initialState: JsonProperty = {
  path: [""],
  value: "",
};

const [property, setProperty] = createSignal(initialState);

export const JsonExplorerContext = createContext({ property, setProperty });
