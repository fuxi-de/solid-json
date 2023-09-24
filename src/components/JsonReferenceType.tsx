import { Component } from "solid-js";
import { JsonArray } from "./JsonArray";
import { JsonObject } from "./JsonObject";
import { JsonElementProps, JsonProperty, JsonValue } from "../types";

export const JsonReferenceType: Component<JsonElementProps> = (props) => {
  //TODO potentially calculate currentIndentation and currentJsonProperty here and pass the key component down

  const isArrayPropery = (
    property: JsonProperty
  ): property is JsonProperty<JsonValue[]> => Array.isArray(property.value);

  return (
    <div>
      {isArrayPropery(props.property) && (
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
