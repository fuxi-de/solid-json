import { Component, createEffect } from "solid-js";
import { JsonObjectType, JsonProperty } from "../App";
import { indentation } from "./JsonExplorer";
import { isPrimitiveJsonValue } from "../utils";
import { JsonPrimitive } from "./JsonPrimitive";
import { JsonReferenceType } from "./JsonReferenceType";
import { JsonKey } from "./JsonKey";

type ObjectProps = {
  key?: string;
  value: JsonObjectType;
  path: string[];
};

export const JsonObject: Component<ObjectProps> = (props) => {
  const currentIndentation = () => `${indentation.repeat(props.path.length)}`;

  const currentJsonProperty: JsonProperty = {
    path: props.path,
    value: JSON.stringify(props.value),
  };
  return (
    <>
      {!props.key && (
        <span>
          {currentIndentation()}
          {"{"}
        </span>
      )}

      {props.key && (
        <>
          {currentIndentation()}
          <JsonKey property={currentJsonProperty} key={props.key} />
          {"{"}
        </>
      )}

      {Object.entries(props.value).map(([key, value], index: number) => {
        const nestedScope = [...props.path, key];
        if (isPrimitiveJsonValue(value)) {
          return <JsonPrimitive key={key} value={value} path={nestedScope} />;
        }
        return <JsonReferenceType key={key} value={value} path={nestedScope} />;
      })}

      {<span>{`${currentIndentation()}},`}</span>}
    </>
  );
};
