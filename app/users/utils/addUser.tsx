"use server";

import prisma from "@/lib/prisma";

export async function addUser() {
   await prisma.user.create({
      data: {
         email: "reza@gmail.com",
         name: "reza",
         password: "rezareza",
      },
   });
}
