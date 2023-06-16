-- CreateTable
CREATE TABLE "Box_parameters" (
    "id" SERIAL NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "background" TEXT NOT NULL,

    CONSTRAINT "Box_parameters_pkey" PRIMARY KEY ("id")
);
