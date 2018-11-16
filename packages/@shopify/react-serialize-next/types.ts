export type Data = any;

export interface Serialization {
  id: string;
  data: Data;
}

export interface Manager {
  set(id: string, data: Data): void;
  get<T>(id: string): T | undefined;
}
