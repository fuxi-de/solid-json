import { Component } from "solid-js";
import { JsonValue } from "../App";
import { JsonReferenceType } from "./JsonReferenceType";

type JsonExplorerProps = {
  input: JsonValue;
};
export const indentation = "  ";

export const JsonExplorer: Component<JsonExplorerProps> = (props) => {
  return (
    <pre class="bg-zinc-700 text-white p-3 rounded-md min-h-min">
      <code>
        <JsonReferenceType value={props.input} path={[]} />
      </code>
    </pre>
  );
};

/**
 * 1. array or pbject
 * 2. key value, where value is either array, object or primitive
 */
