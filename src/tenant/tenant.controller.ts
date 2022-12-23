import { Controller, Post, Body, Get, Res, HttpStatus, RawBodyRequest, Req, Param, HttpCode, Put, Delete, } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { TenantService } from './tenant.service';
import { ITenant } from './interfaces/tenant.inteface';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { TenantModel as TenantModel } from '@prisma/client';

@Controller('tenant')
export class TenantController {
    constructor(private tenantService: TenantService) {}

    @Post()
    async createDraft(
        @Body() tenantData: { tenant_name: string; dob_name: string, is_active: boolean },
      ): Promise<TenantModel> {
        const { tenant_name, dob_name, is_active } = tenantData;
        return this.tenantService.createTenant({ 
          tenant_name,
          dob_name,
          is_active
        });
    }
}