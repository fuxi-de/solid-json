import { Component } from "solid-js";
import { JsonProperty } from "../App";
import { JsonKey } from "./JsonKey";
import { indentation } from "./JsonExplorer";
import { JsonElementProps } from "./JsonReferenceType";

export const JsonPrimitive: Component<JsonElementProps> = (props) => {
  const currentIndentation = () =>
    `${indentation.repeat(props.property.path.length)}`;

  const jsonProperty: JsonProperty = {
    path: props.property.path,
    value: props.property.value,
  };

  return (
    <div>
      {props.shouldRenderKey && (
        <>
          {currentIndentation()}
          <JsonKey
            property={jsonProperty}
            key={jsonProperty.path[jsonProperty.path.length - 1]}
          />
        </>
      )}

      <span>{JSON.stringify(props.property.value)},</span>
    </div>
  );
};
