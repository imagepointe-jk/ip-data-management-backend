import { prisma } from "../prismaClient";

async function erase() {
  await prisma.design.deleteMany();
}

async function seed() {
  await prisma.design.create({
    data: {
      designNumber: 928,
    },
  });
  await prisma.design.create({
    data: {
      designNumber: 911,
    },
  });
}

erase().then(() => seed());
