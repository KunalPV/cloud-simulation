// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ServiceType } from './service-types.enum';

export class Service {
  id: string;
  name: string;
  type: ServiceType;
  region: string;
  vpc: string;
  options: Record<string, any>;
  position: { x: number; y: number };
  connections: string[];

  constructor(
    id: string,
    name: string,
    type: ServiceType,
    region: string,
    vpc: string,
    options: Record<string, any>,
    position: { x: number; y: number },
    connections: string[] = [],
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.region = region;
    this.vpc = vpc;
    this.options = options;
    this.position = position;
    this.connections = connections;
  }
}

// @Entity()
// export class Service {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   name: string;

//   @Column() // Use enum for type safety
//   type: ServiceType;

//   @Column({ type: 'varchar', default: 'global' })
//   region: string;

//   @Column({ type: 'varchar', default: 'default-vpc' })
//   vpc: string;

//   @Column({ type: 'json', default: () => JSON.stringify({}) })
//   options: Record<string, any>;

//   @Column({ type: 'json', default: JSON.stringify({ x: 100, y: 100 }) })
//   position: { x: number; y: number };
// }
