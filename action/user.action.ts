"use server";

import prisma from "@/lib/db";
import { Category } from "@prisma/client";


export const getProductCategory = async (category: Category) => {
  let data

  if (category === "all") {
    data = await prisma.product.findMany()

    return data
  } else {
    data = await prisma.product.findMany({
      where: {
        category: category
      },
    })

    return data
  }

}

export const createReservation = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries())
  console.log(data)
}