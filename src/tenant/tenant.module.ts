import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantEntity } from './tenant.entitys';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { DataSource } from 'typeorm';
import { typeOrmConfig } from 'src/configs/typeorm.config';

@Module({  imports: [TypeOrmModule.forRoot(typeOrmConfig)],     
    controllers: [TenantController], 
    providers: [TenantService] })
export class TenantModule {
    constructor(private dataSource: DataSource) {}
}
