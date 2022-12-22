import { Controller, Post, Body, Get, Res, HttpStatus, RawBodyRequest, Req, Param, HttpCode, Put, } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { TenantService } from './tenant.service';
import { Tenant } from './interfaces/tenant.inteface';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Controller('tenant')
export class TenantController {
    constructor(private tenantService: TenantService) {}

    @Post('create')
    @HttpCode(200)
    async createTenant(@Body() createTenantDto: CreateTenantDto) {
        const tenant = this.tenantService.createTenant(createTenantDto);
        return {
            tenant,
            message: 'Usuario Cadastrado com sucesso'
        }
       }
    @Get()
    async findAll(): Promise<Tenant[]>{
        return this.tenantService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTenantDto: UpdateTenantDto) {
        return `This action returns a #${id} tenant`
    }



}
