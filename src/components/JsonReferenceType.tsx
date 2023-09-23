import { Component } from "solid-js";
import { JsonArray } from "./JsonArray";
import { JsonObject } from "./JsonObject";
import { indentation } from "./JsonExplorer";
import { JsonKey } from "./JsonKey";
import { JsonProperty } from "../App";

type ObjectProps = {
  key?: string;
  value: any;
  path: string[];
  isArray?: boolean;
};

export const JsonReferenceType: Component<ObjectProps> = (props) => {
  //TODO calculate currentIndentation and currentJsonProperty here and pass the key component down
  const currentIndentation = () => `${indentation.repeat(props.path.length)}`;

  const currentJsonProperty: JsonProperty = {
    path: props.path,
    value: JSON.stringify(props.value),
  };

  return (
    <div>
      {Array.isArray(props.value) && (
        <>
          <JsonArray value={props.value} path={props.path} />
        </>
      )}
      {typeof props.value === "object" &&
        !Array.isArray(props.value) &&
        props.value !== null && (
          <>
            <JsonObject
              key={props.path.length || !props.isArray ? props?.key : undefined}
              value={props.value}
              path={props.path}
            />
          </>
        )}
    </div>
  );
};
