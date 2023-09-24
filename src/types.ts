export type JsonObjectType = { [key: string]: JsonValue };

export type JsonValue =
  | string
  | number
  | boolean
  | JsonObjectType
  | Array<JsonValue>;

export type JsonProperty<specific = JsonValue> = {
  path: string[];
  value: specific;
};

export type JsonElementProps<specific = JsonValue> = {
  shouldRenderKey: boolean;
  property: JsonProperty<specific>;
};
