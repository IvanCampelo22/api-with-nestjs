import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { TenantModel, Prisma } from '@prisma/client';

@Injectable()
export class TenantService {
    constructor(private prisma: PrismaService) {}

    async tenant(
        tenantWhereUniqueInput: Prisma.TenantModelWhereUniqueInput,
      ): Promise<TenantModel | null> {
        return this.prisma.tenantModel.findUnique({
          where: tenantWhereUniqueInput,
        });
      }
    
      async tenants(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TenantModelWhereUniqueInput;
        where?: Prisma.TenantModelWhereInput;
        orderBy?: Prisma.TenantModelOrderByWithRelationInput;
      }): Promise<TenantModel[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.tenantModel.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createTenant(data: Prisma.TenantModelCreateInput): Promise<TenantModel> {
        return this.prisma.tenantModel.create({
          data,
        });
      }
    
    }
    
    

