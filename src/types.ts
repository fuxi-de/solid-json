export type JsonObjectType = { [key: string]: JsonValue };

export type JsonValue =
  | string
  | number
  | boolean
  | JsonObjectType
  | Array<JsonValue>;

export type JsonProperty = {
  path: string[];
  value: JsonValue;
};

export type JsonElementProps = {
  shouldRenderKey: boolean;
  property: JsonProperty;
};
