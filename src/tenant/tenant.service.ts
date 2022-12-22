import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TenantEntity } from './tenant.entitys';
import { Tenant } from './interfaces/tenant.inteface'

@Injectable()
export class TenantService {
    private tenants: Tenant[] = [];

    createTenant(tenant: Tenant){
        this.tenants.push(tenant);
    }

    findAll(): Tenant[]{
        return this.tenants;
    }
    


}
