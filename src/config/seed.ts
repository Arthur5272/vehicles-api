import bcrypt from "bcrypt";
import { prisma } from "./prisma";

async function seed() {
  try {
    const user = await prisma.user.upsert({
      where: { email: "user@example.com" },
      update: {},
      create: {
        email: "user@example.com",
        name: "Default User",
        password: await bcrypt.hash("senha456", 10),
        vehicles: {
          create: [
            {
              name: "Model X",
              plate: "ABC1234",
              status: true,
            },
            {
              name: "Model Y",
              plate: "XYZ5678",
              status: false,
            },
          ],
        },
      },
    });

    console.log("✅ Seed completed successfully");
    return user;
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
