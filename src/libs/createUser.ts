import prisma from '@/libs/prisma'; // Impor prisma yang sudah diinisialisasi

async function createUser() {
  const userData = {
    email: "admin@gmail.com",
    password: "securepassword123",
    role: "admin",
    name: "kelompok 2", // Menambahkan 'name' sebagai properti wajib
  };

  try {
    const newUser = await prisma.user.create({
      data: userData,
    });
    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

createUser();
