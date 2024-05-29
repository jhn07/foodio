"use client";

import { Button } from "@/components/ui/button";
import { DataControls } from "@/lib/type";
import { cn } from "@/lib/utils";



type QuantityControlsProps = {
  data: DataControls[]
}

export const QuantityControls = ({ data }: QuantityControlsProps) => {
  return (
    <>
      {data.map(({ productId, className, classNameIcon, icon: Icon, handleControl }) => (
        <div key={productId} className="flex items-center gap-5">
          <Button size="icon" variant="outline" className={cn(
            "rounded-full border-none shadow-md bg-transparent",
            className
          )}
            onClick={() => handleControl(productId)}
          >
            <Icon className={classNameIcon} />
          </Button>
        </div>
      ))}
    </>
  )
}
