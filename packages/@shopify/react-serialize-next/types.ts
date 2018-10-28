export type Data = any;

export interface Serialization {
  id: string;
  data: Data;
}

export interface Manager {
  add(id: string, data: Data): void;
}
