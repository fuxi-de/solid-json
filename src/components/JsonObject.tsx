import { Component } from "solid-js";
import { JsonProperty } from "../App";
import { indentation } from "./JsonExplorer";
import { isPrimitiveJsonValue } from "../utils";
import { JsonPrimitive } from "./JsonPrimitive";
import { JsonElementProps, JsonReferenceType } from "./JsonReferenceType";
import { JsonKey } from "./JsonKey";

export const JsonObject: Component<JsonElementProps> = (props) => {
  const currentIndentation = () =>
    `${indentation.repeat(props.property.path.length)}`;

  const currentJsonProperty: JsonProperty = {
    path: props.property.path,
    value: JSON.stringify(props.property.value),
  };
  return (
    <>
      {!props.shouldRenderKey && (
        <span>
          {currentIndentation()}
          {"{"}
        </span>
      )}

      {props.shouldRenderKey && (
        <>
          {currentIndentation()}
          <JsonKey
            property={currentJsonProperty}
            key={props.property.path[props.property.path.length - 1]}
          />
          {"{"}
        </>
      )}

      {Object.entries(props.property.value).map(([key, value]) => {
        const nestedScope = [...props.property.path, key];
        if (isPrimitiveJsonValue(value)) {
          return (
            <JsonPrimitive
              shouldRenderKey={true}
              property={{ path: nestedScope, value }}
            />
          );
        }
        return (
          <JsonReferenceType
            shouldRenderKey={true}
            property={{ path: nestedScope, value }}
          />
        );
      })}

      {<span>{`${currentIndentation()}},`}</span>}
    </>
  );
};
