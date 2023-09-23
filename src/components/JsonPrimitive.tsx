import { Component } from "solid-js";
import { JsonProperty } from "../App";
import { JsonKey } from "./JsonKey";
import { indentation } from "./JsonExplorer";

type PrimitiveProps = {
  key?: string;
  value: any;
  path: string[];
};

export const JsonPrimitive: Component<PrimitiveProps> = (props) => {
  const currentIndentation = () => `${indentation.repeat(props.path.length)}`;

  const jsonProperty: JsonProperty = {
    path: props.path,
    value: props.value,
  };

  return (
    <div>
      {props.key && (
        <>
          {currentIndentation()}
          <JsonKey property={jsonProperty} key={props.key} />
        </>
      )}

      <span>{JSON.stringify(props.value)},</span>
    </div>
  );
};
