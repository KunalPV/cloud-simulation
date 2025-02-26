import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors();

  await app.listen(process.env.PORT ?? 8080);
  console.log(`Server running on http://localhost:8080`);
}
void bootstrap();
