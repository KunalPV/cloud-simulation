import { Module } from '@nestjs/common';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [ServicesModule],
})
export class AppModule {}
