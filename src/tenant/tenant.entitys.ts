import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class TenantEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: 'varchar', length: 64})
    tenant_name: string;

    @Column({ type: 'varchar', length: 64})
    dob_name: string;

    @Column({type: 'varchar', length:256})
    cnpj: string;

    @Column({type: 'boolean'})
    is_active: boolean 

}