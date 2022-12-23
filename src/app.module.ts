import { Module } from '@nestjs/common';
import { TenantController } from './tenant/tenant.controller';
import { TenantModule } from './tenant/tenant.module';
import { TenantService } from './tenant/tenant.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TenantModule, PrismaModule],
  controllers: [TenantController],
  providers: [TenantService],
})
export class AppModule {}
