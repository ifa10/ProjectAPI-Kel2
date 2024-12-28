import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  await prisma.user.create({
    data: {
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("Admin user created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
