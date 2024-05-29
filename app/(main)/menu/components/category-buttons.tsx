import { Button } from "@/components/ui/button"
import { Category } from "@prisma/client"


const categoryitems = [
  { name: "All", category: "all" as Category },
  { name: "Diner", category: "dinner" as Category },
  { name: "Lunch", category: "lunch" as Category },
  { name: "Desert", category: "dessert" as Category },
  { name: "Drink", category: "drink" as Category },
]

type CategoryButtonsProps = {
  setCategory: (category: Category) => void
}

export const CategoryButtons = ({ setCategory }: CategoryButtonsProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex items-center justify-around gap-3">
      {categoryitems.map((item) => (
        <Button key={item.name} variant="outline"
          className="w-36 h-12 text-lg border-none bg-gray-100 hover:bg-red-400 hover:text-white"
          onClick={() => setCategory(item.category)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  )
}
