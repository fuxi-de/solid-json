import { Component, createEffect } from "solid-js";
import { isPrimitiveJsonValue } from "../utils";
import { JsonPrimitive } from "./JsonPrimitive";
import { indentation } from "./JsonExplorer";
import { JsonReferenceType } from "./JsonReferenceType";
import { JsonProperty, JsonValue } from "../App";
import { JsonKey } from "./JsonKey";

type ArrayProps = {
  key?: string;
  value: JsonValue[];
  path: string[];
};

export const JsonArray: Component<ArrayProps> = (props) => {
  const currentIndentation = () => `${indentation.repeat(props.path.length)}`;
  createEffect(() => console.log("array", props.value));
  const currentJsonProperty: JsonProperty = {
    path: props.path,
    value: JSON.stringify(props.value),
  };
  return (
    <>
      {props.path.length === 0 && <span>{"["}</span>}

      {props.key && (
        <>
          {currentIndentation()}
          <JsonKey property={currentJsonProperty} key={props.key} />
          {"["}
        </>
      )}
      {props.value.map((value: any, index: number) => {
        const nestedScope = [...props.path, `[${index}]`];
        if (isPrimitiveJsonValue(value)) {
          return <JsonPrimitive value={value} path={nestedScope} />;
        }
        return (
          <JsonReferenceType value={value} path={nestedScope} isArray={true} />
        );
      })}
      {<span>{`${currentIndentation()}],`}</span>}
    </>
  );
};
