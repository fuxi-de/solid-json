import { Component, createEffect, useContext } from "solid-js";
import { JsonProperty } from "../App";
import { JsonExplorerContext } from "../context";
import { indentation } from "./JsonExplorer";

type KeyValueProps = {
  key: string;
  property: JsonProperty;
};

export const JsonKey: Component<KeyValueProps> = (props) => {
  const { setProperty } = useContext(JsonExplorerContext);

  return (
    <span onClick={() => setProperty(props.property)}>
      {`"${props.key}"`}:{" "}
    </span>
  );
};
