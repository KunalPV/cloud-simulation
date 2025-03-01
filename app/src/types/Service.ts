export enum ServiceType {
  Server = "server",
  Database = "database",
}

export interface ServiceOptions {
  [key: string]: string[] | boolean[];
}

export interface ServiceData {
  id: string;
  name: string;
  type: ServiceType;
  options: ServiceOptions;
  region: string;
  vpc: string;
  position: { x: number; y: number };
  connections: string[];
}

export interface ServiceNodeData {
  name: string;
  type: ServiceType;
  options: ServiceOptions;
  region: string;
  vpc: string;
  [key: string]: unknown;
}
