type ValueType = string | number | object | unknown;

export type Option<T extends ValueType = unknown> = {
  value: T;
  label: string;
};
