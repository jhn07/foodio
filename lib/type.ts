import { Product } from "@prisma/client"
import { LucideIcon } from "lucide-react"

export type CurrentProducProps = Omit<Product, "description" | "rating" | "category"> & {
  qnt: number
}


export type DataControls = {
  productId: string
  icon: LucideIcon
  className: string
  classNameIcon: string
  handleControl: (productId: string) => void
}