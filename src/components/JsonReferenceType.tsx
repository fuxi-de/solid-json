import { Component } from "solid-js";
import { JsonArray } from "./JsonArray";
import { JsonObject } from "./JsonObject";
import { indentation } from "./JsonExplorer";
import { JsonKey } from "./JsonKey";
import { JsonElementProps, JsonProperty, JsonValue } from "../types";

export const JsonReferenceType: Component<JsonElementProps> = (props) => {
  //TODO calculate currentIndentation and currentJsonProperty here and pass the key component down
  const currentIndentation = () =>
    `${indentation.repeat(props.property.path.length)}`;

  const currentJsonProperty: JsonProperty = {
    path: props.property.path,
    value: JSON.stringify(props.property.value),
  };

  function isArr(elem: JsonProperty): elem is JsonProperty<JsonValue[]> {
    return Array.isArray(elem);
  }

  return (
    <div>
      {isArr(props.property) && (
        <>
          <JsonArray
            property={props.property}
            shouldRenderKey={props.shouldRenderKey}
          />
        </>
      )}
      {typeof props.property.value === "object" &&
        !Array.isArray(props.property.value) &&
        props.property.value !== null && (
          <>
            <JsonObject
              shouldRenderKey={props.shouldRenderKey}
              property={props.property}
            />
          </>
        )}
    </div>
  );
};
