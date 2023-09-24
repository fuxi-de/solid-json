import { Component, createEffect } from "solid-js";
import { isPrimitiveJsonValue } from "../utils";
import { JsonPrimitive } from "./JsonPrimitive";
import { indentation } from "./JsonExplorer";
import { JsonElementProps, JsonReferenceType } from "./JsonReferenceType";
import { JsonProperty, JsonValue } from "../App";
import { JsonKey } from "./JsonKey";

export const JsonArray: Component<JsonElementProps> = (props) => {
  const currentIndentation = () =>
    `${indentation.repeat(props.property.path.length)}`;
  createEffect(() => console.log("array", props.property.value));

  const currentJsonProperty: JsonProperty = {
    path: props.property.path,
    value: JSON.stringify(props.property.value),
  };

  return (
    <>
      {props.property.path.length === 0 && <span>{"["}</span>}
      {props.shouldRenderKey && (
        <>
          {currentIndentation()}
          <JsonKey
            property={currentJsonProperty}
            key={currentJsonProperty.path[currentJsonProperty.path.length - 1]}
          />
          {"["}
        </>
      )}
      {(props.property.value as JsonValue[]).map(
        (value: any, index: number) => {
          const nestedScope = [...props.property.path, `[${index}]`];
          if (isPrimitiveJsonValue(value)) {
            return (
              <JsonPrimitive
                property={{ path: nestedScope, value }}
                shouldRenderKey={false}
              />
            );
          }
          return (
            <JsonReferenceType
              property={{ path: nestedScope, value }}
              shouldRenderKey={false}
            />
          );
        }
      )}
      {<span>{`${currentIndentation()}],`}</span>}
    </>
  );
};
