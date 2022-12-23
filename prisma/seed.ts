// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.tenantModel.upsert({
    where: {id: 1},
    update: {},
    create: {
      tenant_name: 'Matias',
      dob_name: 'SuperTravel',
      is_active:true
    },
  });

  const post2 = await prisma.tenantModel.upsert({
    where: {id: 2},
    update: {},
    create: {
      tenant_name: 'Marcos',
      dob_name: 'BebidasCilianas',
      is_active: true
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });