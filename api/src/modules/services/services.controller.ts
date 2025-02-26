import { Controller, Get, Param } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ServiceType } from './service-types.enum';
import { Service } from './service.entity';
import { ServiceConfig } from './service.config';

@Controller('service')
export class ServicesController {
  @Get(':type')
  getTemplate(@Param('type') type: ServiceType): Service {
    const config = ServiceConfig[type];
    if (!config) {
      throw new Error(`Invalid service type: ${type}`);
    }
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      id: `${type}-${uuid()}`,
      name: config.name,
      type,
      region: 'global',
      vpc: 'default-vpc',
      options: config.options,
      position: { x: 100, y: 100 },
      connections: [],
    };
  }
}
