"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { UseCategory } from "./hooks/use-category";
import { Category } from "@prisma/client";
import { ProductItem } from "./product-item";
import { CustomLoading } from "./custom-loading";


const categoryitems = [
  { name: "All", category: "all" as Category },
  { name: "Diner", category: "dinner" as Category },
  { name: "Lunch", category: "lunch" as Category },
  { name: "Desert", category: "dessert" as Category },
  { name: "Drink", category: "drink" as Category },
]

export const PopularMenu = () => {
  const [category, setCategory] = useState<Category>("all")
  const { data, loading } = UseCategory(category)
  return (
    <div className="mt-10 flex flex-col gap-5">
      <div className="w-full flex flex-wrap items-center justify-center gap-10">
        {categoryitems.map((item, idx) => (
          <Button key={idx} size="lg" variant="outline"
            className={cn(
              "w-32 rounded-full text-lg text-muted-foreground shadow-md bg-gradient-to-l from-red-300/85 border-b-1 border-b-black/20 border-l-0 border-t-0 hover:bg-red-400",
              category === item.category && "bg-red-400 text-primary"
            )}
            onClick={() => setCategory(item.category)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 items-center gap-5 md:grid-cols-3">
        <CustomLoading loading={loading} />
        {data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

