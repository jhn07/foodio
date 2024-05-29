
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@prisma/client"
import { CurrentProducProps, DataControls } from "@/lib/type"
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react"
import { QuantityControls } from "./quantity-controls"


type ProductsProps = {
  product: Product
  isAdded: boolean
  handleOpen: (product: CurrentProducProps) => void
  handleIncrease: (productId: string) => void
  handleDecrease: (productId: string) => void
}


export const Products: React.FC<ProductsProps> = ({ product, isAdded, handleOpen, handleIncrease, handleDecrease }) => {
  const data = [
    {
      productId: product.id,
      handleControl: handleDecrease,
      className: "bg-red-100 hover:bg-red-200",
      classNameIcon: "text-red-400/85 group-hover:text-red-500",
      icon: MinusCircleIcon
    },
    {
      productId: product.id,
      handleControl: handleIncrease,
      className: "bg-green-100 hover:bg-green-200",
      classNameIcon: "text-green-400/85 group-hover:text-green-500",
      icon: PlusCircleIcon
    },

  ] as DataControls[]

  return (
    <Card className="min-h-[250px] bg-gradient bg-gradient-to-b from-gray-200/85 shadow-md">
      <CardHeader className="flex items-center">
        <Image
          src={`/food${product.imgProduct}`}
          alt={product.title}
          width={200}
          height={200}
          className="object-cover aspect-square"
        />
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-4 items-center">
          <div className="border p-1.5 rounded-md font-semibold bg-gray-50 shadow-sm">
            ${product.price}
          </div>
          {isAdded ? (
            <QuantityControls data={data} />
          ) : (
            <Button variant="login" className=" bg-red-500 hover:bg-red-600"
              onClick={() => handleOpen({
                ...product,
                qnt: 1
              })}
            >
              Order
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

