import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './tenant/prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });
  await app.listen(3000);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
}
bootstrap();
