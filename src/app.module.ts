import { Module } from '@nestjs/common';
import { TenantController } from './tenant/tenant.controller';
import { TenantModule } from './tenant/tenant.module';
import { TenantService } from './tenant/tenant.service';

@Module({
  imports: [TenantModule],
  controllers: [TenantController],
  providers: [TenantService],
})
export class AppModule {
}
