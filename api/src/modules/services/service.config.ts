import { ServiceType } from './service-types.enum';

export interface ServiceTemplate {
  name: string;
  options: Record<string, any>;
}

export const ServiceConfig: Record<ServiceType, ServiceTemplate> = {
  [ServiceType.Server]: {
    name: 'General Purpose Server',
    options: {
      size: ['small', 'medium', 'large'],
      power_state: ['idle', 'on', 'off'],
    },
  },
  [ServiceType.Database]: {
    name: 'Database',
    options: {
      size: ['small', 'medium', 'large'],
      category: ['Relational', 'Non-Relational'],
      replication: [true, false],
      read_only: [true, false],
    },
  },

  // more services to add later on
};
