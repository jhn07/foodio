import { Product } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { buyProduct, buyProducts } from "@/action/buy.action";

type ProductItemProps = {
  product: Product
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
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
          <form action={buyProduct}>
            <input type="hidden" name="productId" value={product.id} />
            <Button type="submit" variant="login" className=" bg-red-500 hover:bg-red-600">
              Buy
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
