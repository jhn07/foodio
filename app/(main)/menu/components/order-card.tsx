import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MinusCircleIcon, PlusCircleIcon, ShoppingBasketIcon, Trash2Icon, XCircleIcon } from "lucide-react"
import { CurrentProducProps, DataControls } from "@/lib/type"
import { buyProducts } from "@/action/buy.action"
import { QuantityControls } from "./quantity-controls"



type OrderCardProps = {
  currentProducts: CurrentProducProps[]
  handleClose: () => void
  handleDelete: (prouctId: string) => void
  handleIncrease: (productId: string) => void
  handleDecrease: (productId: string) => void
}

const totalPrice = (currentProducts: CurrentProducProps[]) => {
  return currentProducts.reduce((acc, item) =>
    acc + (item.qnt + Number(item.price)), 0).toFixed(2)
}

export const OrderCard = ({ currentProducts, handleClose, handleDelete, handleIncrease, handleDecrease }: OrderCardProps) => {
  const total = totalPrice(currentProducts)
  const productsBuy = buyProducts.bind(null, currentProducts)

  return (
    <Card className="min-h-56 shadow-md bg-gradient-to-t from-gray-100 p-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Order</CardTitle>
          <div className="p-1.5 bg-gray-100 h-6 w-6 flex items-center justify-center rounded-full">
            <Button size="icon" variant="destructive" className="rounded-full h-5 w-5"
              onClick={handleClose}
            >
              <XCircleIcon />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardDescription className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          {currentProducts.map((product) => (
            <OrderCardItems key={product.id}
              product={product}
              handleDelete={handleDelete}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          ))}
        </div>
        {currentProducts.length > 0 ? (
          <div className="flex items-center justify-between px-2">
            <h3 className="text-primary font-semibold">
              Total: <span className="text-[13.5px] font-medium">${total}</span>
            </h3>
            <form action={productsBuy}>
              <Button type="submit" className="font-normal bg-red-400 hover:bg-red-500">Buy</Button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <ShoppingBasketIcon className="h-9 w-9 text-red-400" />
            <p>Shopping bag is empty</p>
          </div>
        )}
      </CardDescription>
    </Card>
  )
}

type OrderCardItemsProps = {
  product: CurrentProducProps
  handleDelete: (prouctId: string) => void
  handleIncrease: (productId: string) => void
  handleDecrease: (productId: string) => void

}

function OrderCardItems({ product, handleDelete, handleIncrease, handleDecrease }: OrderCardItemsProps) {
  const data = [
    {
      productId: product.id,
      handleControl: handleDecrease,
      className: "h-6 w-6 bg-red-100 hover:bg-red-200",
      classNameIcon: "text-red-400/85 group-hover:text-red-500",
      icon: MinusCircleIcon
    },
    {
      productId: product.id,
      handleControl: handleIncrease,
      className: "h-6 w-6 bg-green-100 hover:bg-green-200",
      classNameIcon: "text-green-400/85 group-hover:text-green-500",
      icon: PlusCircleIcon
    },

  ] as DataControls[]

  return (
    <div className="flex flex-col gap-0.5 border rounded-md p-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={`/food${product.imgProduct}`}
            alt={product.title}
            width={50}
            height={50}
            className="object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-sm text-black/85 font-medium">{product.title}</h1>
            <p className="text-[13.5px]">
              ${product.price}
            </p>
          </div>
        </div>
        <Button size="icon" variant="outline" className="h-5 w-5"
          onClick={() => handleDelete(product.id)}
        >
          <Trash2Icon className="h-4 w-4 hover:text-red-500" />
        </Button>
      </div>
      <div className="flex items-center gap-5 p-3">
        <div className="border px-4 py-0.5 rounded-md">
          <p className="text-sm text-black/85 font-medium">{product.qnt}</p>
        </div>
        <QuantityControls data={data} />
      </div>
    </div>
  )
}