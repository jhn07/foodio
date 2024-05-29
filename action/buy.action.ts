"use server";

import prisma from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";



export const buyProducts = async (products: any, formData: FormData) => {

  const lineItems = products.map((product: any) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        // images: [product.imgProduct],
        description: product.description
      },
      unit_amount: Math.round(Number(product.price) * 100),  // цена в центах
    },
    quantity: product.qnt,
  }))


  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.SUCCESS_URL as string}`,
    cancel_url: `${process.env.CANCEL_URL as string}`
  })


  redirect(session.url as string)
}


export const buyProduct = async (formData: FormData) => {
  const productId = formData.get("productId") as string
  if (!productId) return

  const product = await prisma.product.findUnique({
    where: {
      id: productId
    },
    select: {
      title: true,
      description: true,
      price: true,
      imgProduct: true
    }
  })

  if (!product) return

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: {
          name: product.title,
          description: product.description,
        },
        unit_amount: Number(product.price) * 100,
      },
      quantity: 1
    }],
    mode: "payment",
    success_url: `${process.env.SUCCESS_URL as string}`,
    cancel_url: `${process.env.CANCEL_URL as string}`
  })

  return redirect(session.url as string)
}