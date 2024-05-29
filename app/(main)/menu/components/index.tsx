"use client";

import { UseCategory } from "@/components/hooks/use-category";
import { cn } from "@/lib/utils";
import { Category, Product } from "@prisma/client";
import { useState } from "react";
import { CustomLoading } from "@/components/custom-loading";
import { CategoryButtons } from "./category-buttons";
import { OrderCard } from "./order-card";
import { CurrentProducProps } from "@/lib/type";
import { Products } from "./products";
import { ShoppingBasketIcon } from "lucide-react";



export default function IndexPage() {
  const [open, setOpen] = useState(false)
  const [currentProducts, setCurrentProducts] = useState<CurrentProducProps[] | []>([])
  const [category, setCategory] = useState<Category>("all")
  const { data, loading } = UseCategory(category)


  const handleOpen = (product: CurrentProducProps) => {
    setOpen(true)
    setCurrentProducts((prevState) => {
      const existingProductIndex = prevState.findIndex((p) => p.id === product.id)
      if (existingProductIndex !== -1) {
        return prevState.map((item, index) =>
          index === existingProductIndex ? { ...item, qnt: item.qnt + 1 } : item
        );
      };

      return [...prevState, { ...product, qnt: 1 }]
    })
  }

  const handleDelete = (productId: string) => {
    setCurrentProducts((prevState) => prevState.filter((p) => p.id !== productId))
  }

  const handleIncrease = (productId: string) => {
    setCurrentProducts((prevState) => {
      const existingProductIndex = prevState.findIndex((p) => p.id === productId)
      if (existingProductIndex !== -1) {
        return prevState.map((item, idx) => idx === existingProductIndex ? { ...item, qnt: item.qnt + 1 } : item)
      }

      return prevState
    })
  }

  const handleDecrease = (productId: string) => {
    setCurrentProducts((prevState) => {
      const existingProductIndex = prevState.findIndex((p) => p.id === productId)
      if (existingProductIndex !== -1 && prevState[existingProductIndex].qnt > 1) {
        return prevState.map((item, idx) => idx === existingProductIndex ? { ...item, qnt: item.qnt - 1 } : item)
      } else if (existingProductIndex !== -1 && prevState[existingProductIndex].qnt === 1) {
        return prevState.filter((_, idx) => idx !== existingProductIndex)
      }
      return prevState
    })
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentProducts([])
  }

  return (
    <div className="flex flex-col mt-10 p-1.5">
      <CategoryButtons setCategory={setCategory} />
      <div className={cn(
        "min-h-[50vh] grid grid-cols-1 items-center gap-3 mt-5 p-1.5",
        open && "md:grid-cols-[3fr_1fr] items-start",
      )}>
        <div className={cn(
          "grid grid-cols-1 gap-3 md:grid-cols-3",
          data.length === 0 && " md:grid-cols-1"
        )}>
          <CustomLoading loading={loading} />
          {data.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <ShoppingBasketIcon className="h-9 w-9 text-red-400" />
              <p>No products</p>
            </div>
          ) : data.map((product) => {
            const isAdded = currentProducts.some((p) => p.id === product.id)
            return (
              <Products
                key={product.id}
                product={product}
                isAdded={isAdded}
                handleOpen={handleOpen}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}

              />
            )
          })}
        </div>
        {open && <OrderCard
          currentProducts={currentProducts}
          handleClose={handleClose}
          handleDelete={handleDelete}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />}
      </div>
    </div>
  )
}
