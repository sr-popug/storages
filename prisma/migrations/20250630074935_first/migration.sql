-- CreateTable
CREATE TABLE "Storage" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "storageId" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "size" INTEGER[],
    "isOccupied" BOOLEAN NOT NULL,
    "startOccupied" TIMESTAMP(3),
    "endOccupied" TIMESTAMP(3),
    "userName" TEXT,
    "userPhone" TEXT,
    "userCode" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
