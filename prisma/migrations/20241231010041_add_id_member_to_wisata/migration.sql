-- CreateTable
CREATE TABLE "Wisata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "idMember" INTEGER NOT NULL
);
