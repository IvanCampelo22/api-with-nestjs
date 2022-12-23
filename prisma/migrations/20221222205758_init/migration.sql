-- CreateTable
CREATE TABLE "TenantModel" (
    "id" SERIAL NOT NULL,
    "tenant_name" TEXT NOT NULL,
    "dob_name" TEXT,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "TenantModel_pkey" PRIMARY KEY ("id")
);
