import { Component, useContext } from "solid-js";
import { JsonProperty } from "../App";
import { JsonExplorerContext } from "../context";

type KeyValueProps = {
  key: string;
  property: JsonProperty;
};

export const JsonKey: Component<KeyValueProps> = (props) => {
  const { setProperty } = useContext(JsonExplorerContext);

  return (
    <span
      class="hover:text-sky-400 hover:cursor-pointer"
      onClick={() => setProperty(props.property)}
    >
      {`"${props.key}"`}:{" "}
    </span>
  );
};
