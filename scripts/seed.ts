import prisma from "@/lib/db"
import { Product } from "@prisma/client"


const data = [
  {
    title: "Penne Alla Vodak",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "12.05",
    imgProduct: "/anne-alla-vodak.png",
    category: "dinner",
  },
  {
    title: "Spaghetti",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "12.05",
    imgProduct: "/spaghetti.png",
    category: "dinner"
  },
  {
    title: "Gnocchi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "12.05",
    imgProduct: "/gnocchi.png",
    category: "lunch"
  },
  {
    title: "Rovioli",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "12.05",
    imgProduct: "/rovioli.png",
    category: "lunch"
  },
  {
    title: "Bacon Pizza",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "12.05",
    imgProduct: "/pitza-becon.png",
    category: "dinner"
  },
  {
    title: "Splitza Signature",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "12.05",
    imgProduct: "/splitza-signature.png",
    category: "dinner"
  },
] as Omit<Product, "id">[]


const main = async () => {
  try {
    console.log("Seeding Start")

    await prisma.product.createMany({
      data: data,
      skipDuplicates: true
    })

    console.log("Seeding End")
  } catch (error) {
    console.log(error)
  }
}

main()