import { Component } from "solid-js";
import { JsonReferenceType } from "./JsonReferenceType";
import { JsonValue } from "../types";

type JsonExplorerProps = {
  rootNode: JsonValue;
};

export const indentation = "  ";

export const JsonExplorer: Component<JsonExplorerProps> = (props) => {
  return (
    <pre class="bg-zinc-700 text-white p-3 rounded-md min-h-min">
      <code>
        <JsonReferenceType
          shouldRenderKey={false}
          property={{ value: props.rootNode, path: [] }}
        />
      </code>
    </pre>
  );
};
